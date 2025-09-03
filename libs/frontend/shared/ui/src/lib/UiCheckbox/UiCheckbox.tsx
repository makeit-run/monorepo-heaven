'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import {
  checkboxVariants,
  checkboxIndicatorVariants,
  checkboxIconVariants,
} from './config';

export interface UiCheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

function UiCheckbox({ className, variant, ...props }: UiCheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ variant }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={checkboxIndicatorVariants({ variant })}
      >
        <CheckIcon className={checkboxIconVariants({ variant })} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { UiCheckbox };