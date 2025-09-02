import { cn } from "@shared/utils/cn"
import * as React from "react"
import { forwardRef, useImperativeHandle } from "react"
import { Platform, Pressable, TextInput, View } from "react-native"

import { otpInputVariants } from "@frontend/shared/mobile-ui/OTPInput/config"

import { Text } from "../Text"
import { styles } from "./styles"
import { OtpInputProps, OtpInputRef } from "./types"
import { useOtpInput } from "./useOtpInput"
import { VerticalStick } from "./VerticalStick"

export const OtpInput = forwardRef<OtpInputRef, OtpInputProps>((props, ref) => {
  const {
    models: { text, inputRef, focusedInputIndex, isFocused, placeholder },
    actions: {
      clear,
      handlePress,
      handleTextChange,
      focus,
      handleFocus,
      handleBlur
    },
    forms: { setTextWithRef }
  } = useOtpInput(props)

  const {
    error,
    disabled,
    numberOfDigits = 6,
    autoFocus = true,
    hideStick,
    focusStickBlinkingDuration,
    secureTextEntry = false,
    type = "numeric"
  } = props

  useImperativeHandle(ref, () => ({ clear, focus, setValue: setTextWithRef }))
  const { number, stick, input, container } = otpInputVariants({})

  return (
    <View className={container()}>
      {Array(numberOfDigits)
        .fill(0)
        .map((_, index) => {
          const isPlaceholderCell = !!placeholder && !text?.[index]
          const char = isPlaceholderCell
            ? placeholder?.[index] || " "
            : text[index]
          const isFocusedInput =
            index === focusedInputIndex && !disabled && Boolean(isFocused)
          const isFilledLastInput =
            text.length === numberOfDigits && index === text.length - 1
          const isFocusedContainer =
            isFocusedInput || (isFilledLastInput && Boolean(isFocused))

          return (
            <Pressable
              key={`${char}-${index}`}
              disabled={disabled}
              onPress={handlePress}
              className={cn(input(), {
                "border-primary": isFocusedContainer,
                "border-error": error
              })}
              testID="otp-input"
            >
              {isFocusedInput && !hideStick ? (
                <VerticalStick
                  className={stick()}
                  focusStickBlinkingDuration={focusStickBlinkingDuration}
                />
              ) : (
                <Text
                  className={cn(number(), {
                    "opacity-50": isPlaceholderCell
                  })}
                >
                  {char && secureTextEntry ? "•" : char}
                </Text>
              )}
            </Pressable>
          )
        })}
      <TextInput
        value={text}
        onChangeText={handleTextChange}
        maxLength={numberOfDigits}
        inputMode={type === "numeric" ? type : "text"}
        textContentType="oneTimeCode"
        ref={inputRef}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        autoComplete={Platform.OS === "android" ? "sms-otp" : "one-time-code"}
        aria-disabled={disabled}
        editable={!disabled}
        testID="otp-input-hidden"
        onFocus={handleFocus}
        onBlur={handleBlur}
        caretHidden={Platform.OS === "ios"}
        style={[styles.hiddenInput]}
      />
    </View>
  )
})
