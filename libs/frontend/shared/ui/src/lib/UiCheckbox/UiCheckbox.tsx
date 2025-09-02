'use client';

import { cn } from '@shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes, useId } from 'react';

import { checkboxLabelStyles, checkboxStyles } from './config';

export interface UiCheckboxProps
  extends VariantProps<typeof checkboxStyles>,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  boxStyle?: string;
  label?: string;
  labelPosition?: 'left' | 'right';
  labelStyle?: string;
  error?: string;
}

export const UiCheckbox = forwardRef<HTMLInputElement, UiCheckboxProps>(
  (
    {
      boxStyle,
      labelStyle,
      label,
      variant,
      size,
      className,
      labelPosition,
      color,
      error,
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className={'flex flex-col'}>
        <div
          className={cn(
            'inline-flex items-stretch gap-2',
            { 'flex-row-reverse': labelPosition === 'left' },
            boxStyle
          )}
        >
          <div className="relative">
            <input
              id={id}
              ref={ref}
              type="checkbox"
              className={cn(
                checkboxStyles({ variant, color, size }),
                className
              )}
              {...props}
            />
            <svg
              className={cn(
                'pointer-events-none absolute inset-0 hidden stroke-white p-0.5 outline-none peer-checked:block'
              )}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          {label && (
            <label
              htmlFor={id}
              className={cn(
                checkboxLabelStyles({ color, size }),
                'leading-none',
                labelStyle
              )}
            >
              {label}
            </label>
          )}
        </div>
        {error && <p className="px-1 pt-1.5 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);
UiCheckbox.displayName = 'UiCheckbox';
