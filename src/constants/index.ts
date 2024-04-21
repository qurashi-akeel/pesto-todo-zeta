export const TODO_STATUSES = {
  PLANNED: "PLANNED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
};

export type TodoStatusType = keyof typeof TODO_STATUSES;
