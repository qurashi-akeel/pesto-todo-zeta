import mongoose, {
  Schema,
  type Document,
  type Schema as TSchema,
} from "mongoose";
import { TODO_STATUSES, type TodoStatusType } from "../constants";

export interface Todo extends Document {
  title: string;
  description: string;
  status: TodoStatusType;
  createdAt: Date;
}

const TodoSchema: TSchema<Todo> = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    min: [3, "Title must be at least 3 characters long"],
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: TODO_STATUSES,
    required: [true, "Status is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  todos: [{ type: Schema.Types.ObjectId; ref: "Todo" }];
  isVerified: boolean;
  verifyCode: string;
  verifyCodeExpiry: Date;
}

const UserSchema: TSchema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    min: [5, "Username must be at least 5 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please use a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  todos: {
    type: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
    default: [],
  },
  verifyCode: String,
  verifyCodeExpiry: Date,
  isVerified: {
    type: Boolean,
    default: false,
  },
});

export const User =
  (mongoose.models?.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export const Todo =
  (mongoose.models?.Todo as mongoose.Model<Todo>) ||
  mongoose.model<Todo>("Todo", TodoSchema);
