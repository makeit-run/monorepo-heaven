import { cn } from "@shared/utils/cn"
import { Loader as LoaderIcon, LucideProps } from "lucide-react-native"
import React, { useEffect, useRef } from "react"
import { Animated, Easing, View } from "react-native"

import { LucideIcon } from "@frontend/shared/mobile-ui/LucideIcon"

interface LoaderProps extends LucideProps {
  speed?: number
  containerClassName?: string
}

export function Loader({
  containerClassName,
  size = 24,
  speed = 1000,
  ...props
}: LoaderProps) {
  const spinValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const setupAnimation = () => {
      spinValue.setValue(0)

      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: speed,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ).start()
    }

    setupAnimation()

    return () => spinValue.stopAnimation()
  }, [spinValue, speed])

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  })

  return (
    <View
      className={cn(
        "flex items-center justify-start self-start",
        containerClassName
      )}
    >
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <LucideIcon icon={LoaderIcon} size={size} {...props} />
      </Animated.View>
    </View>
  )
}
