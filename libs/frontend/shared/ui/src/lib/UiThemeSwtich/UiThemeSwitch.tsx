"use client"

import {
  switchRootStyles,
  switchThumbStyles
} from "@frontend/shared/ui/UiSwitch/config"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@shared/utils/cn"
import { Moon, Sun } from "lucide-react"
import * as React from "react"

interface UiThemeSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

const UiThemeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  UiThemeSwitchProps
>(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        switchRootStyles({
          size: "extraLarge"
        }),
        "relative data-[state=checked]:bg-white data-[state=unchecked]:bg-white",
        className
      )}
      checked={checked}
      onCheckedChange={onCheckedChange}
      ref={ref}
      {...props}
    >
      {/* Sun Icon (Light Mode) */}
      <span className="absolute left-2 z-0 stroke-2 text-yellow-500">
        <Sun size={18} />
      </span>

      {/* Switch Thumb - Now Fully Moving */}
      <SwitchPrimitives.Thumb
        className={cn(
          switchThumbStyles({
            size: "extraLarge"
          }),
          "data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary !z-[3]"
        )}
      />

      {/* Moon Icon (Dark Mode) */}
      <span className="absolute right-2 z-0 stroke-2 text-blue-600">
        <Moon size={18} />
      </span>
    </SwitchPrimitives.Root>
  )
})

UiThemeSwitch.displayName = "UiThemeSwitch"

export { UiThemeSwitch }
