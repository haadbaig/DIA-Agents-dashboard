import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, title, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <label className="absolute left-3 top-1 text-sm text-slate-400">
          {title}
        </label>
        <input
          type={type}
          className={cn(
            'h-12 w-full rounded-sm border border-input bg-gray-50 px-5 pt-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm focus:ring-black focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
