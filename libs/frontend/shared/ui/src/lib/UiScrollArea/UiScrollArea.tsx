import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@shared/utils/cn"
import * as React from "react"

import { ScrollAreaThumbStyles, scrollBarStyles } from "./config"

const UiScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn(className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full max-h-full">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <UiScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
UiScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const UiScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(scrollBarStyles({ orientation }), className)}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn(
        ScrollAreaThumbStyles(),
        orientation === "vertical" && "flex-1"
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
UiScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { UiScrollArea, UiScrollBar }
