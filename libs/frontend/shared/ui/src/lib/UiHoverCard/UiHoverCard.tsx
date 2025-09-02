"use client"

import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import { hoverCardContentStyles } from "./config"

const UiHoverCard = HoverCardPrimitive.Root

const UiHoverCardTrigger = HoverCardPrimitive.Trigger

const UiHoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> &
    VariantProps<typeof hoverCardContentStyles>
>(({ className, variant, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(hoverCardContentStyles({ variant }), className)}
    {...props}
  />
))
UiHoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { UiHoverCard, UiHoverCardTrigger, UiHoverCardContent }
