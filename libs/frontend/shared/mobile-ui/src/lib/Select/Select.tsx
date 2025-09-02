import { cn } from "@shared/utils/cn"
import { Check, ChevronDown, ChevronUp } from "lucide-react-native"
import * as React from "react"
import { ComponentProps } from "react"
import { Platform, StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"
import type { VariantProps } from "tailwind-variants"

import { selectVariants } from "@frontend/shared/mobile-ui/Select/config"
import { textInputVariants } from "@frontend/shared/mobile-ui/TextInput/config"

import * as SelectPrimitive from "../@Primitives/components/Select"
import { LucideIcon } from "../LucideIcon"

type Option = SelectPrimitive.Option

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.Value>) => {
  const { value } = SelectPrimitive.useRootContext()

  return (
    <SelectPrimitive.Value
      // for placeholder color
      className={cn(
        "text-[16px]",
        value ? "text-inherit" : "text-black-300",
        className
      )}
      {...props}
    />
  )
}

interface SelectTriggerProps
  extends SelectPrimitive.TriggerProps,
    VariantProps<typeof textInputVariants> {
  icon?: React.ReactNode
}

const SelectTrigger = React.forwardRef<
  SelectPrimitive.TriggerRef,
  SelectTriggerProps
>(({ className, children, size, icon, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      selectVariants({ size }),
      props.disabled && "opacity-50",
      className
    )}
    {...props}
  >
    <>{children}</>
    {icon || (
      <LucideIcon
        icon={ChevronDown}
        size={18}
        aria-hidden={true}
        className="text-primary-500"
      />
    )}
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

/**
 * Platform: WEB ONLY
 */
const SelectScrollUpButton = ({
  className,
  ...props
}: SelectPrimitive.ScrollUpButtonProps) => {
  if (Platform.OS !== "web") {
    return null
  }
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    >
      <LucideIcon icon={ChevronUp} size={14} className="text-foreground" />
    </SelectPrimitive.ScrollUpButton>
  )
}

/**
 * Platform: WEB ONLY
 */
const SelectScrollDownButton = ({
  className,
  ...props
}: SelectPrimitive.ScrollDownButtonProps) => {
  if (Platform.OS !== "web") {
    return null
  }
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    >
      <LucideIcon icon={ChevronDown} size={14} className="text-foreground" />
    </SelectPrimitive.ScrollDownButton>
  )
}

const SelectContent = React.forwardRef<
  SelectPrimitive.ContentRef,
  SelectPrimitive.ContentProps & {
    portalHost?: string
    containerClassName?: string
  }
>(
  (
    {
      className,
      children,
      containerClassName,
      position = "popper",
      portalHost,
      ...props
    },
    ref
  ) => {
    const { open } = SelectPrimitive.useRootContext()

    return (
      <SelectPrimitive.Portal hostName={portalHost}>
        <SelectPrimitive.Overlay
          style={Platform.OS !== "web" ? StyleSheet.absoluteFill : undefined}
        >
          <Animated.View
            className={cn("z-50", containerClassName)}
            entering={FadeIn}
            exiting={FadeOut}
          >
            <SelectPrimitive.Content
              ref={ref}
              className={cn(
                "border-border bg-popover shadow-foreground/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 rounded-md border px-1 py-2 shadow-md",
                position === "popper" &&
                  "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",

                className
              )}
              position={position}
              {...props}
            >
              <SelectScrollUpButton />
              <SelectPrimitive.Viewport
                className={cn(
                  "p-1",
                  position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                )}
              >
                <ScrollView>{children}</ScrollView>
              </SelectPrimitive.Viewport>
              <SelectScrollDownButton />
            </SelectPrimitive.Content>
          </Animated.View>
        </SelectPrimitive.Overlay>
      </SelectPrimitive.Portal>
    )
  }
)
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  SelectPrimitive.LabelRef,
  SelectPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "native:pb-2 native:pl-10 text-popover-foreground native:text-base py-1.5 pl-8 pr-2 text-sm font-semibold",
      className
    )}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  SelectPrimitive.ItemRef,
  SelectPrimitive.ItemProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "native:py-2 native:pl-6 active:bg-accent relative flex w-full flex-row items-center rounded-sm py-1.5 pl-8 pr-2",
      props.disabled && "opacity-50",
      className
    )}
    {...props}
  >
    <View className="native:left-0.5 native:pt-px absolute left-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <LucideIcon
          icon={Check}
          size={16}
          strokeWidth={3}
          className="text-popover-foreground"
        />
      </SelectPrimitive.ItemIndicator>
    </View>
    <SelectPrimitive.ItemText className="text-popover-foreground native:text-base text-sm" />
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  SelectPrimitive.SeparatorRef,
  SelectPrimitive.SeparatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  type Option
}
