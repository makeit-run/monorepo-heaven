"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import {
  radioGroupIndicatorStyles,
  radioGroupItemStyles,
  radioGroupStyles
} from "./config"

const UiRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> &
    VariantProps<typeof radioGroupStyles>
>(({ className, variant, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn(radioGroupStyles({ variant }), className)}
    {...props}
  />
))
UiRadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const UiRadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator> &
    VariantProps<typeof radioGroupIndicatorStyles>
>(({ className, variant, children, ...props }, ref) => (
  <RadioGroupPrimitive.Indicator
    ref={ref}
    className={cn(radioGroupIndicatorStyles({ variant }), className)}
    {...props}
  />
))
UiRadioGroupIndicator.displayName = "UiRadioGroupIndicator"

const UiRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof radioGroupItemStyles>
>(({ className, variant, children, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(radioGroupItemStyles({ variant }), className)}
    {...props}
  >
    <div className="flex items-center">{children}</div>
    <UiRadioGroupIndicator />
  </RadioGroupPrimitive.Item>
))
UiRadioGroupItem.displayName = "RadioGroupItem"

export { UiRadioGroup, UiRadioGroupItem, UiRadioGroupIndicator }
