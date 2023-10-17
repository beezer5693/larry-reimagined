import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva(
  "relative  inline-flex items-center justify-center capitalize transition duration-200 ease-in-out text-sm text-black focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  {
    variants: {
      variant: {
        primary: "bg-[#3a53f5] text-white",
        secondary: "bg-white text-black",
      },
      size: {
        default: "px-8 py-3",
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

export default Button;
