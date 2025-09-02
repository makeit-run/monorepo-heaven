import * as React from "react"
import { memo, useEffect, useRef } from "react"
import { Animated, View } from "react-native"

interface VerticalStickProps {
  focusStickBlinkingDuration?: number
  className?: string
}

export const VerticalStick: React.FC<VerticalStickProps> = memo(
  ({ focusStickBlinkingDuration = 350, className }) => {
    const opacityAnim = useRef(new Animated.Value(1)).current

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacityAnim, {
            toValue: 0,
            useNativeDriver: true,
            duration: focusStickBlinkingDuration
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,
            useNativeDriver: true,
            duration: focusStickBlinkingDuration
          })
        ]),
        {
          iterations: -1
        }
      ).start()
    }, [])

    return (
      <Animated.View style={{ opacity: opacityAnim }}>
        <View className={className} testID="otp-input-stick" />
      </Animated.View>
    )
  }
)
