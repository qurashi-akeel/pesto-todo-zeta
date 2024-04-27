import { z } from "zod";

// TODO: Fix hardcoded status instead of import from constants.
const TodoStatusType = z.enum([
  "PLANNED",
  "IN_PROGRESS",
  "COMPLETED",
  "DELETED",
]);

export const todoSchema = z.object({
  title: z.string(),
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters" })
    .max(300, { message: "Description cannot exceed 300 characters" })
    .optional(),
  status: TodoStatusType,
  createdAt: z.string(),
  // Add userId
});
