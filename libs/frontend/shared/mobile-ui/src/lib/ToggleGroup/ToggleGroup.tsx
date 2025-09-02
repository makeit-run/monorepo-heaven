import { cn } from "@shared/utils/cn"
import type { VariantProps } from "class-variance-authority"
import type { LucideIcon as LucideIconType } from "lucide-react-native"
import * as React from "react"

import * as ToggleGroupPrimitive from "../@Primitives/components/ToggleGroup"
import { LucideIcon } from "../LucideIcon"
import { TextClassContext } from "../Text"
import { toggleVariants } from "../Toggle"

const ToggleGroupContext = React.createContext<VariantProps<
  typeof toggleVariants
> | null>(null)

const ToggleGroup = React.forwardRef<
  ToggleGroupPrimitive.RootRef,
  ToggleGroupPrimitive.RootProps & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex flex-row items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

function useToggleGroupContext() {
  const context = React.useContext(ToggleGroupContext)
  if (context === null) {
    throw new Error(
      "ToggleGroup compound components cannot be rendered outside the ToggleGroup component"
    )
  }
  return context
}

const ToggleGroupItem = React.forwardRef<
  ToggleGroupPrimitive.ItemRef,
  ToggleGroupPrimitive.ItemProps & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = useToggleGroupContext()
  const { value } = ToggleGroupPrimitive.useRootContext()

  const { toggle, text } = toggleVariants({
    variant: context.variant || variant,
    size: context.size || size,
    active: ToggleGroupPrimitive.utils.getIsSelected(value, props.value)
  })

  return (
    <TextClassContext.Provider value={text()}>
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(toggle(), props.disabled && "opacity-50", className)}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    </TextClassContext.Provider>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

function ToggleGroupIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<LucideIconType> & {
  icon: LucideIconType
}) {
  const textClass = React.useContext(TextClassContext)

  return <LucideIcon className={cn(textClass, className)} {...props} />
}

export { ToggleGroup, ToggleGroupIcon, ToggleGroupItem }
