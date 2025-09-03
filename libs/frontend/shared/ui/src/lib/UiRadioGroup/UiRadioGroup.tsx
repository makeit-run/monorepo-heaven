'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import {
  radioGroupVariants,
  radioGroupItemVariants,
  radioGroupIndicatorVariants,
  radioGroupIndicatorIconVariants,
} from './config';

export interface UiRadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root>,
    VariantProps<typeof radioGroupVariants> {}

function UiRadioGroup({
  className,
  variant,
  orientation,
  ...props
}: UiRadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn(radioGroupVariants({ variant, orientation }), className)}
      {...props}
    />
  );
}

export interface UiRadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {}

function UiRadioGroupItem({
  className,
  variant,
  size,
  ...props
}: UiRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioGroupItemVariants({ variant, size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className={cn(radioGroupIndicatorVariants({ variant }))}
      >
        <CircleIcon
          className={cn(radioGroupIndicatorIconVariants({ variant, size }))}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { UiRadioGroup, UiRadioGroupItem };
