import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import FacebookIcon from "@/components/icons/FacebookIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedinIcon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mapToIcon(type: any): any {
  switch (type) {
    case "FACEBOOK":
      return FacebookIcon;
    case "INSTAGRAM":
      return InstagramIcon;
    case "LINKEDIN":
      return LinkedInIcon;
    case "GITHUB":
      return GithubIcon;
    default:
      return FacebookIcon;
  }
}
