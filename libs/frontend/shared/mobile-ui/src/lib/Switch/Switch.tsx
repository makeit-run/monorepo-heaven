import { cn } from "@shared/utils/cn"
import * as React from "react"
import { Platform } from "react-native"
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from "react-native-reanimated"
import type { VariantProps } from "tailwind-variants"

import { switchVariants } from "@frontend/shared/mobile-ui/Switch/config"

import * as SwitchPrimitives from "../@Primitives/components/Switch"

const SwitchNative = React.forwardRef<
  SwitchPrimitives.RootRef,
  SwitchPrimitives.RootProps &
    Omit<VariantProps<typeof switchVariants>, "active">
>(({ className, size, variant, ...props }, ref) => {
  const translateX = useDerivedValue(() => (props.checked ? 18 : 0))

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(translateX.value, { duration: 200 }) }]
  }))

  const { thumb, root, wrapper } = switchVariants({
    size,
    variant,
    active: props.checked
  })

  return (
    <Animated.View className={cn(wrapper(), props.disabled && "opacity-50")}>
      <SwitchPrimitives.Root
        className={cn(root(), className)}
        {...props}
        ref={ref}
      >
        <Animated.View style={animatedThumbStyle}>
          <SwitchPrimitives.Thumb className={thumb()} />
        </Animated.View>
      </SwitchPrimitives.Root>
    </Animated.View>
  )
})
SwitchNative.displayName = "SwitchNative"

const Switch = Platform.select({
  web: SwitchNative,
  default: SwitchNative
})

export { Switch }
