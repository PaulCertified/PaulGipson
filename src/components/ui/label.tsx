import React from 'react';
import { cn } from '../../utils/cn';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium text-gray-200",
          className
        )}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";
