"use client"

import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@shared/utils/cn"
import * as React from "react"

const UiRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "group relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full border border-black/30 bg-white">
      <SliderPrimitive.Range className="bg-primary absolute h-full group-aria-[disabled=true]:opacity-70" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="border-primary bg-primary ring-offset-primarhy focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-aria-[disabled=true]:opacity-70" />
  </SliderPrimitive.Root>
))
UiRange.displayName = SliderPrimitive.Root.displayName

export { UiRange }
