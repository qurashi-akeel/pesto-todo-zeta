import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { number } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, time = false) {
  return Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: time ? "numeric" : undefined,
    minute: time ? "numeric" : undefined,
    second: time ? "numeric" : undefined,
  }).format(new Date(date));
}
