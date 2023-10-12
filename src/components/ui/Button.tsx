import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva(
  "active:translate-x-0 relative rounded-sm inline-flex items-center justify-center active:translate-y-0 transition duration-200 ease-in-out border border-black text-sm text-black focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:-translate-x-[3px] hover:-translate-y-[3px]",
  {
    variants: {
      variant: {
        primary: "bg-yellow-400",
        secondary: "bg-white",
      },
      size: {
        default: "px-8 py-2.5",
        sm: "px-6 py-2",
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
  className2?: string;
}

const Button: FC<ButtonProps> = ({
  className,
  className2,
  children,
  variant,
  size,
  isLoading = false,
  ...props
}) => {
  return (
    <div className="relative">
      <div
        className={cn("absolute inset-0 rounded-sm bg-black", className2)}
      ></div>
      <button
        disabled={isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
