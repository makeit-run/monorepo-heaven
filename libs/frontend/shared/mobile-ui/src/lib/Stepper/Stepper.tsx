// Виправлена версія для анімації кнопок
import { cn } from "@shared/utils/cn"
import { Minus, Plus } from "lucide-react-native"
import * as React from "react"
import { Pressable, Text, View } from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming
} from "react-native-reanimated"
import type { VariantProps } from "tailwind-variants"

import { LucideIcon } from "@frontend/shared/mobile-ui/LucideIcon"

import { numericStepperVariants } from "./config"

export interface NumericStepperProps
  extends Omit<VariantProps<typeof numericStepperVariants>, "state"> {
  className?: string
  value: number
  onValueChange: (value: number) => void
  minValue?: number
  maxValue?: number
  step?: number
  disabled?: boolean
  nativeID?: string
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const AnimatedText = Animated.createAnimatedComponent(Text)

export const Stepper = React.forwardRef<View, NumericStepperProps>(
  (
    {
      className,
      style,
      size,
      value,
      onValueChange,
      minValue = 0,
      maxValue = Infinity,
      step = 1,
      disabled = false,
      nativeID
    },
    ref
  ) => {
    // Shared animation values
    const decrementScale = useSharedValue(1)
    const incrementScale = useSharedValue(1)
    const valueScale = useSharedValue(1)
    const valueOpacity = useSharedValue(1)
    const translateY = useSharedValue(0)

    const prevValueRef = React.useRef(value)

    const isDecrementDisabled = disabled || value <= minValue
    const isIncrementDisabled = disabled || value >= maxValue

    React.useEffect(() => {
      if (value !== prevValueRef.current) {
        const isIncrement = value > prevValueRef.current

        translateY.value = isIncrement ? 20 : -20

        setTimeout(() => {
          translateY.value = withSpring(0, {
            damping: 15,
            stiffness: 150
          })
        }, 10)

        valueScale.value = withSequence(
          withTiming(1.3, { duration: 120 }),
          withSpring(1, { damping: 12, stiffness: 120 })
        )

        valueOpacity.value = withSequence(
          withTiming(0.6, { duration: 80 }),
          withTiming(1, { duration: 160 })
        )
      }

      prevValueRef.current = value
    }, [value])

    const handleDecrement = () => {
      if (isDecrementDisabled) return

      const newValue = Math.max(minValue, value - step)
      onValueChange(newValue)
    }

    const handleIncrement = () => {
      if (isIncrementDisabled) return

      const newValue = Math.min(maxValue, value + step)
      onValueChange(newValue)
    }

    const decrementAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: decrementScale.value }]
    }))

    const incrementAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: incrementScale.value }]
    }))

    const valueAnimatedStyle = useAnimatedStyle(() => ({
      transform: [
        { scale: valueScale.value },
        { translateY: translateY.value }
      ],
      opacity: valueOpacity.value
    }))

    const { container, button, buttonWrapper, valueWrapper, valueText } =
      numericStepperVariants({
        style,
        size,
        state: disabled ? "disabled" : "enabled"
      })

    return (
      <View
        className={cn(container(), className)}
        style={[{ overflow: "hidden" }]}
        ref={ref}
        nativeID={nativeID}
      >
        <View className={buttonWrapper()}>
          <AnimatedPressable
            className={cn(button(), isDecrementDisabled && "opacity-50")}
            style={[decrementAnimatedStyle]}
            onPress={handleDecrement}
            disabled={isDecrementDisabled}
            onPressIn={() => {
              decrementScale.value = withSpring(0.9, {
                mass: 0.3,
                stiffness: 120
              })
            }}
            onPressOut={() => {
              decrementScale.value = withSpring(1, {
                mass: 0.3,
                stiffness: 120
              })
            }}
            accessibilityRole="button"
            accessibilityLabel="Decrease value"
          >
            <LucideIcon icon={Minus} size={18} strokeWidth={3} />
          </AnimatedPressable>
        </View>

        <View className={valueWrapper()} style={{ overflow: "hidden" }}>
          <AnimatedText style={valueAnimatedStyle} className={valueText()}>
            {value}
          </AnimatedText>
        </View>

        <View className={buttonWrapper()}>
          <AnimatedPressable
            className={cn(button(), isIncrementDisabled && "opacity-50")}
            style={[incrementAnimatedStyle]}
            onPress={handleIncrement}
            disabled={isIncrementDisabled}
            onPressIn={() => {
              incrementScale.value = withSpring(0.9, {
                mass: 0.3,
                stiffness: 120
              })
            }}
            onPressOut={() => {
              incrementScale.value = withSpring(1, {
                mass: 0.3,
                stiffness: 120
              })
            }}
            accessibilityRole="button"
            accessibilityLabel="Increase value"
          >
            <LucideIcon icon={Plus} size={18} strokeWidth={3} />
          </AnimatedPressable>
        </View>
      </View>
    )
  }
)

Stepper.displayName = "NumericStepper"
