import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const basePath = process.env.NODE_ENV === 'production' ? '/wedohype-landing-academy' : '';

export function getImagePath(path: string) {
  return `${basePath}${path}`;
}
