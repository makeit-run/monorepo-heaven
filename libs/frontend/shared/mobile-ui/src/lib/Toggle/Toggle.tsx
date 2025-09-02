import { cn } from "@shared/utils/cn"
import type { LucideIcon as LucideIconType } from "lucide-react-native"
import * as React from "react"
import { type VariantProps } from "tailwind-variants"

import * as TogglePrimitive from "../@Primitives/components/Toggle"
import { LucideIcon } from "../LucideIcon"
import { TextClassContext } from "../Text"
import { toggleVariants } from "./config"

const Toggle = React.forwardRef<
  TogglePrimitive.RootRef,
  TogglePrimitive.RootProps & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => {
  const { toggle, text } = toggleVariants({
    size,
    variant,
    active: props?.pressed
  })

  return (
    <TextClassContext.Provider value={cn(text(), className)}>
      <TogglePrimitive.Root
        ref={ref}
        className={cn(toggle(), props.disabled && "opacity-50", className)}
        {...props}
      />
    </TextClassContext.Provider>
  )
})

Toggle.displayName = TogglePrimitive.Root.displayName

function ToggleIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<LucideIconType> & {
  icon: LucideIconType
}) {
  const textClass = React.useContext(TextClassContext)

  return <LucideIcon className={cn(textClass, className)} {...props} />
}

export { Toggle, ToggleIcon, toggleVariants }
