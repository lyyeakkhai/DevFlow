import { error } from "console";
import { NextResponse } from "next/server";
import { RequestError, ValidationError } from "../http-errors";
import z, { ZodError } from "zod";
import { de } from "zod/locales";

// we need to set the response type for error handling because this can be api error or sever action
export type ResponeType = "api" | "server";

const formatResponse = (
  responType: ResponeType,
  statusCode: number,
  message: string,
  errors?: Record<string, string[]> | undefined
) => {
  const responseContent = {
    success: false,
    error: {
      message,
      details: errors,
    },
  };

  return responType === "api"
    ? NextResponse.json(responseContent, { status: statusCode })
    : {
        status: statusCode,
        ...responseContent,
      };
};

const handleError = (error: unknown, responType: ResponeType = "server") => {
  // first we need to check is it a known error
  // check if it a RequestError
  if (error instanceof RequestError) {
    return formatResponse(responType, error.statusCode, error.message, error.errors);
  }

  // Check if it a validation error
  if (error instanceof ZodError) {
    const fieldErrors = z.treeifyError(error) as Record<string, string[]>;
    const validationError = new ValidationError(fieldErrors);

    return formatResponse(responType, validationError.statusCode, validationError.message, validationError.errors);
  }

  if (error instanceof Error) {
    // For unknown errors, return a generic 500 error
    return formatResponse(responType, 500, error.message);
  }

  return formatResponse(responType, 500, "Unexpected error occurred");
};

export default handleError;