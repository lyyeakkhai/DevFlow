import { schema } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import { Schema, models, model, Types } from "mongoose";

export interface Account {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  provider: string;
  providerAccountId: string;
}

const accountSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
  },
  { timestamps: true }
);

const Account = models?.Account || model<Account>("Account", accountSchema);

export default Account;
