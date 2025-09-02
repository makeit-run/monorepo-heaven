"use client"

import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import { switchRootStyles, switchThumbStyles } from "./config"

interface UiSwitchProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
      "color"
    >,
    VariantProps<typeof switchRootStyles> {
  thumbStyles?: VariantProps<typeof switchThumbStyles>
}

const UiSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  UiSwitchProps
>(
  (
    { className, color, thumbStyles, size, variant, children, ...props },
    ref
  ) => (
    <SwitchPrimitives.Root
      className={cn(switchRootStyles({ color, variant, size }), className)}
      ref={ref}
      {...props}
    >
      {children}
      <SwitchPrimitives.Thumb
        className={switchThumbStyles({ color, variant, size })}
      />
    </SwitchPrimitives.Root>
  )
)
UiSwitch.displayName = SwitchPrimitives.Root.displayName

export { UiSwitch }
