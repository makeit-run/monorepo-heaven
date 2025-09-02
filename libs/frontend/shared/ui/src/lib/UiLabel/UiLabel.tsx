"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@shared/utils/cn"
import { type VariantProps } from "class-variance-authority"
import React from "react"

import { labelStyles } from "./config"

const UiLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelStyles>
>(({ className, variant, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelStyles({ variant }), className)}
    {...props}
  />
))
UiLabel.displayName = LabelPrimitive.Root.displayName

export { UiLabel }
