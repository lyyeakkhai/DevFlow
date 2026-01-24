"use client";

import { Path, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AskQuestionSchema } from "@/lib/validation";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [] as string[],
    },
  });

  const handleSubmitForm = () => {};

  return (
    <Form {...form}>
      {/* Form fields will go here */}
      <form action="" onSubmit={form.handleSubmit(handleSubmitForm)} className="flex flex-col gap-10">
        
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2.5">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-light-500 body-regular mt-5.2">
                Be specific and imagine youU+2019re asking a question to another person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2.5">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                Detail explanation of your problem <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>editor</FormControl>
              <FormDescription className="text-light-500 body-regular mt-5.2">
                Introduce the problem and expand on what you put in the title.Minimum 20 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2.5">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                Tags<span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-[56px] border"
                    {...field}
                    placeholder="Add tags..."
                  />
                  Tags
                </div>
              </FormControl>
              <FormDescription className="text-light-500 body-regular mt-5.2">
                Add up to 5 tags to describe what your question is about.Starting to see suggesstion.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end mt-16">
            <Button type="submit" className="primary-gradient text-dark400_light900 px-4 py-3"> Ask a Question</Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
