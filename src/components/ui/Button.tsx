import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva(
  "relative inline-flex rounded-md items-center font-medium capitalize justify-center transition duration-200 ease-in-out text-gray-950 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 backdrop-blur-xl text-white",
        secondary: "bg-white text-gray-950",
        dark: "bg-gray-950 text-white",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-3 py-2",
        lg: "md:px-10 md:py-3 px-6 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      disabled={isLoading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, buttonVariants };
