import { Eye, EyeOff } from "lucide-react-native"
import * as React from "react"
import { Animated, Pressable, View } from "react-native"

import { LucideIcon } from "@frontend/shared/mobile-ui/LucideIcon"

import { TextInput, type TextInputProps } from "../TextInput"

const PasswordInput = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  TextInputProps
>((props, ref) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const animatedOpacity = React.useRef(new Animated.Value(0)).current
  const animatedRotate = React.useRef(new Animated.Value(0)).current

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)

    // Animate opacity of icon
    Animated.sequence([
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      }),
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      })
    ]).start()

    // Animate rotation of icon
    Animated.timing(animatedRotate, {
      toValue: showPassword ? 0 : 1,
      duration: 300,
      useNativeDriver: true
    }).start()
  }

  const iconRotation = animatedRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"]
  })

  return (
    <View className="relative w-full">
      <TextInput
        ref={ref}
        textContentType="password"
        autoComplete="password"
        secureTextEntry={!showPassword}
        {...props}
      />
      <Pressable
        disabled={!props?.editable}
        onPress={toggleShowPassword}
        role="button"
        className={`absolute inset-y-0 right-3 z-10 flex items-center justify-center ${!props?.editable ? "opacity-50" : ""}`}
      >
        <Animated.View
          style={{
            opacity: animatedOpacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1]
            }),
            transform: [{ rotate: iconRotation }]
          }}
        >
          <LucideIcon
            icon={showPassword ? EyeOff : Eye}
            size={18}
            className="text-primary-500"
          />
        </Animated.View>
      </Pressable>
    </View>
  )
})

PasswordInput.displayName = "PasswordInput"

export { PasswordInput, type TextInputProps }
