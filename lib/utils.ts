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

export function mapToIcon(type: SocialType): any {
  switch (type) {
    case SocialType.FACEBOOK:
      return Facebook;
    case SocialType.INSTAGRAM:
      return Instagram;
    case SocialType.LINKEDIN:
      return LinkedIn;
    case SocialType.GITHUB:
      return GitHub;
    default:
      return Facebook;
  }
}
