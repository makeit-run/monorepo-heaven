import { cn } from "@shared/utils/cn"
import * as React from "react"
import { ComponentProps } from "react"
import { View } from "react-native"
import type { VariantProps } from "tailwind-variants"

import { radioVariants } from "@frontend/shared/mobile-ui/RadioGroup/config"
import { Text } from "@frontend/shared/mobile-ui/Text"

import * as RadioGroupPrimitive from "../@Primitives/components/RadioGroup"

const RadioGroup = React.forwardRef<
  RadioGroupPrimitive.RootRef,
  RadioGroupPrimitive.RootProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

interface RadioGroupItem
  extends RadioGroupPrimitive.ItemProps,
    VariantProps<typeof radioVariants> {}

const RadioGroupItem = React.forwardRef<
  RadioGroupPrimitive.ItemRef,
  RadioGroupItem
>(({ className, size, variant, ...props }, ref) => {
  const { item, indicator } = radioVariants({
    size,
    variant
  })

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        item(),
        props.disabled && "web:cursor-not-allowed opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <View className={indicator()} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

interface RadioGroupItemWithLabelProps extends RadioGroupItem {
  onLabelPress: () => void
  textProps?: ComponentProps<typeof Text>
}

const RadioGroupItemWithLabel = React.forwardRef<
  RadioGroupPrimitive.ItemRef,
  RadioGroupItemWithLabelProps
>(({ value, onLabelPress, textProps, ...rest }, ref) => {
  return (
    <View className={"flex-row items-center gap-2"}>
      <RadioGroupItem
        aria-labelledby={`label-for-${value}`}
        value={value}
        {...rest}
      />
      <Text
        nativeID={`label-for-${value}`}
        onPress={onLabelPress}
        {...textProps}
        variant={textProps?.variant || "body2"}
      >
        {value}
      </Text>
    </View>
  )
})

export { RadioGroup, RadioGroupItem, RadioGroupItemWithLabel }
