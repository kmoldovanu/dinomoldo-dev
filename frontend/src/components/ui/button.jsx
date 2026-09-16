import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
    "transition-all duration-150 ease-in-out",
    "disabled:pointer-events-none disabled:opacity-50",
    // Focus ring accessibile
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    // Active scale per feedback tattile
    "active:scale-[0.98]",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm hover:shadow-accent/20 hover:shadow-md",
        outline:
          "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
        ghost:
          "bg-transparent text-foreground hover:bg-elevated",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
