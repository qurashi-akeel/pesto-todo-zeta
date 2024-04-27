import mongoose, {
  Schema,
  type Document,
  type Schema as TSchema,
} from "mongoose";
import { TODO_STATUSES, type TodoStatusType } from "../constants";

export interface Todo extends Document {
  title: string;
  userId: string;
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
  userId: {
    type: String,
    required: true,
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

export const Todo =
  (mongoose.models?.Todo as mongoose.Model<Todo>) ||
  mongoose.model<Todo>("Todo", TodoSchema);
