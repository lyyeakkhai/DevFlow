import { model, models, Schema } from "mongoose";

// define type for user
export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  bio?: string;
  image: string;
  location?: string;
  portfolio?: string;
  reputations: number;
}

// first we need to define our schema
const userSchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    image: { type: String, required: true },
    location: { type: String },
    portfolio: { type: String },
    reputations: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// this will create our model from the above schema
// but if we craete user ever time we call it, it will create multiple models
// so we need to check if the model already exists
const User = models?.User || model<IUser>("User", userSchema);

export default User;
