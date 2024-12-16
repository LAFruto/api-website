import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "cva";
import { type HTMLAttributes, forwardRef } from "react";

const typographyVariants = cva("tracking-normal", {
  variants: {
    variant: {
      hero: "text-2xl leading-6 sm:text-4xl sm:leading-10 text-primary",
      heading: "text-2xl leading-7",
      subheading: "text-base leading-7 text-primary",
      body: "text-base leading-6",
      "body-sm": "text-sm leading-6",
      sm: "text-xs leading-4",
    },
    weight: {
      bold: "font-bold",
      medium: "font-medium",
      normal: "font-normal",
      light: "font-light",
    },
    color: {
      primary: "text-blue-900",
      secondary: "text-neutral-800",
      accent: "text-neutral-800",
      hint: "text-neutral-800",
      destructive: "text-neutral-800",
    },
    prose: {
      true: "max-w-prose",
      false: "",
    },
    italic: {
      true: "italic",
      false: "not-italic",
    },
    inverse: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      inverse: true,
      color: "primary",
      className: "text-ctx-primary-inverse-fg-primary",
    },

    {
      inverse: true,
      color: "secondary",
      className: "text-ctx-primary-inverse-fg-secondary",
    },

    {
      inverse: true,
      color: "hint",
      className: "text-ctx-primary-inverse-fg-hint",
    },

    {
      inverse: true,
      color: "destructive",
      className: "text-ctx-primary-inverse-fg-destructive",
    },
  ],
  defaultVariants: {
    variant: "body",
    color: "primary",
    weight: "normal",
    italic: false,
    inverse: false,
  },
});

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  balance?: boolean;
}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ asChild, balance, color, weight, variant, prose, italic, inverse, className, ...rest }, ref) => {
    const PolymorphicComponent = asChild ? "div" : "p"; // Example: use `span` if `asChild` is true

    return (
      <PolymorphicComponent
        ref={ref}
        className={cn(
          typographyVariants({
            color,
            weight,
            variant,
            prose,
            italic,
            inverse,
          }),
          balance && "text-balance",
          className
        )}
        {...rest}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography };
