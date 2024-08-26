import { SocialType } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { GitHub, LinkedIn, Instagram, Facebook } from "@mui/icons-material";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateToCustomString(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return date.toLocaleDateString("en-GB", options);
}

export function mapToIcon(type: any): any {
  switch (type) {
    case SocialType.FACEBOOK || "FACEBOOK":
      return Facebook;
    case SocialType.INSTAGRAM || "INSTAGRAM":
      return Instagram;
    case SocialType.LINKEDIN || "LINKEDIN":
      return LinkedIn;
    case SocialType.GITHUB || "GITHUB":
      return GitHub;
    default:
      return Facebook;
  }
}
