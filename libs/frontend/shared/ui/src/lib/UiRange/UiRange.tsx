'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import {
  rangeVariants,
  rangeTrackVariants,
  rangeRangeVariants,
  rangeThumbVariants,
} from './config';

export interface UiRangeProps
  extends React.ComponentProps<typeof SliderPrimitive.Root>,
    VariantProps<typeof rangeVariants> {
  rangeVariant?: VariantProps<typeof rangeRangeVariants>['variant'];
}

const UiRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  UiRangeProps
>(({ className, variant, size, rangeVariant, ...props }, ref) => (
  <SliderPrimitive.Root
    data-slot="range"
    ref={ref}
    className={cn(rangeVariants({ variant, size }), className)}
    {...props}
  >
    <SliderPrimitive.Track
      data-slot="range-track"
      className={cn(rangeTrackVariants({ variant, size }))}
    >
      <SliderPrimitive.Range
        data-slot="range-range"
        className={cn(rangeRangeVariants({ variant: rangeVariant || variant }))}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      data-slot="range-thumb"
      className={cn(rangeThumbVariants({ variant, size }))}
    />
  </SliderPrimitive.Root>
));

UiRange.displayName = SliderPrimitive.Root.displayName;

export { UiRange };
