"use client"

import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import { popoverContentStyles } from "./config"

const UiPopover = PopoverPrimitive.Root

const UiPopoverTrigger = PopoverPrimitive.Trigger

const UiPopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
    VariantProps<typeof popoverContentStyles>
>(({ className, variant, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Content
    {...props}
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(popoverContentStyles({ variant }), className)}
  />
))
UiPopoverContent.displayName = PopoverPrimitive.Content.displayName

export { UiPopover, UiPopoverTrigger, UiPopoverContent }
