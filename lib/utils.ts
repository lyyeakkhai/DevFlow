import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
  
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// inorder use dynamic icon from devicon we need to implement a function that can generate the class names
export const getDeviconClassNames = (iconName: string) => {
  const normalizedIconName = iconName.replace(/[ .]/g, "").toLowerCase();
  return techMap[normalizedIconName] ? `${techMap[normalizedIconName]} colored` : "devicon-devicon-plain";
}
