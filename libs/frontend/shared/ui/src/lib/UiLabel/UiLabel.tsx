'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import { labelVariants } from './config';

export interface UiLabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

function UiLabel({ className, variant, ...props }: UiLabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant }), className)}
      {...props}
    />
  );
}

export { UiLabel };
