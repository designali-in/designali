import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@designali/ui";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import type { IconVariants } from "./icons";
import type { LoaderVariant } from "./loader";
import { Loader } from "./loader";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ali: "bg-ali text-white",
        default:
          "bg-primary text-primary-foreground hover:bg-ali hover:text-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-full px-5",
        md: "h-9 rounded-full px-6",
        lg: "h-12 rounded-full px-8",
        icon: "h-8 w-8",
        lgicon: "h-12 w-12 rounded-full",
      },
      isLoading: {
        true: "flex items-center gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      children,
      asChild = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const loaderVariant =
      variant === undefined || variant === "default" ? "primary" : variant;
    const loaderSize = size === "icon" ? "lg" : size;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, isLoading, className }))}
        ref={ref}
        disabled={Boolean(isLoading) || disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader
              variant={loaderVariant as LoaderVariant["variant"]}
              size={loaderSize as IconVariants["size"]}
            />
            {size !== "icon" && children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const IconButton = ({
  className = "w-10 h-10",
  children,
  ...props
}: IconButtonProps) => (
  <button
    {...props}
    className={
      className +
      " inline-flex items-center justify-center rounded-full border outline-none transition-all duration-300 hover:bg-[#ececec36]"
    }
  >
    {children}
  </button>
);

Button.displayName = "Button";

export { Button, IconButton, buttonVariants };
