import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// The purpose of the cn function is to provide a convenient way to construct class names that are compatible with both CSS modules and Tailwind CSS.

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
