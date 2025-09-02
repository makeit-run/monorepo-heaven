"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import { progressIndicatorStyles, progressStyles } from "./config"

interface UiProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressStyles> {
  indicatorStyles?: VariantProps<typeof progressIndicatorStyles>
}

const UiProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  UiProgressProps
>(({ className, variant, indicatorStyles, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressStyles({ variant }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={progressIndicatorStyles(indicatorStyles)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
UiProgress.displayName = ProgressPrimitive.Root.displayName

export { UiProgress }
