import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md px-3 py-2 text-sm",
          "bg-[#1C1C2E] text-white border border-white/10",
          "focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent",
          "placeholder:text-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
