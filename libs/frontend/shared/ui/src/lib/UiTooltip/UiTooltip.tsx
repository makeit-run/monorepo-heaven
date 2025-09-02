import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import { tooltipContentStyles } from "./config"

const UiTooltipTrigger = TooltipPrimitive.Trigger
const UiTooltipPortal = TooltipPrimitive.Portal

interface UiTooltipProps
  extends React.ComponentProps<typeof TooltipPrimitive.Root> {
  providerProps?: React.ComponentProps<typeof TooltipPrimitive.Provider>
}

function UiTooltip({ providerProps, children, ...props }: UiTooltipProps) {
  return (
    <TooltipPrimitive.Provider {...providerProps}>
      <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

UiTooltip.displayName = TooltipPrimitive.Content.displayName

const UiTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
    VariantProps<typeof tooltipContentStyles>
>(({ className, variant, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(tooltipContentStyles({ variant }), className)}
    {...props}
  />
))
UiTooltipContent.displayName = TooltipPrimitive.Content.displayName

export { UiTooltip, UiTooltipTrigger, UiTooltipContent, UiTooltipPortal }
