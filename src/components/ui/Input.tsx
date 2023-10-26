import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-input placeholder:text-muted-foreground flex w-full rounded border bg-transparent px-3 py-2.5 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-[#3a53f5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3a53f5] disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
