import { cn } from "@shared/utils/cn"
import { Check } from "lucide-react-native"
import * as React from "react"
import { View } from "react-native"
import { type VariantProps } from "tailwind-variants"

import * as CheckboxPrimitive from "../@Primitives/components/Checkbox/CheckboxPrimitive"
import { LucideIcon } from "../LucideIcon"
import {
  checkboxIndicatorVariants,
  checkboxVariants,
  iconVariants
} from "./config"

type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> &
  VariantProps<typeof checkboxVariants> & {
    className?: string
    indicatorClassName?: string
  }

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, indicatorClassName, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkboxVariants({ variant, size, className }))}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          checkboxIndicatorVariants({
            variant,
            size,
            className: indicatorClassName
          })
        )}
      >
        <View className="flex size-full items-center justify-center">
          <LucideIcon
            icon={Check}
            className={cn(iconVariants({ size, variant }))}
          />
        </View>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = "Checkbox"

export { Checkbox }
export type { CheckboxProps }
