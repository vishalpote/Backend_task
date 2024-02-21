import mongoose, { Schema,Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  age?: number;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number }
});

export default mongoose.model<IUser>("User", userSchema);
