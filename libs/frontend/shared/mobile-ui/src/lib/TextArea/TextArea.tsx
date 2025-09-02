import { cn } from "@shared/utils/cn"
import * as React from "react"
import { Text as RNText, TextInput as RNTextInput, View } from "react-native"
import { type VariantProps } from "tailwind-variants"

import { Text } from "../Text"
import { textAreaLabelVariants, textAreaVariants } from "./config"

type TextAreaProps = React.ComponentPropsWithoutRef<typeof RNTextInput> &
  VariantProps<typeof textAreaVariants> & {
    className?: string
    label?: string
    helperText?: string
    error?: string
    containerClassName?: string
    labelClassName?: string
    helperTextClassName?: string
  }

const TextArea = React.forwardRef<
  React.ElementRef<typeof RNTextInput>,
  TextAreaProps
>(
  (
    {
      className,
      variant,
      size,
      label,
      helperText,
      error,
      containerClassName,
      labelClassName,
      helperTextClassName,
      multiline = true,
      ...props
    },
    ref
  ) => {
    const inputVariant = error
      ? "error"
      : props.editable === false
        ? "disabled"
        : variant
    const labelVariant = error
      ? "error"
      : props.editable === false
        ? "disabled"
        : variant

    return (
      <View className={cn("w-full self-center", containerClassName)}>
        {label && (
          <Text
            className={cn(
              textAreaLabelVariants({ variant: labelVariant, size }),
              labelClassName
            )}
          >
            {label}
          </Text>
        )}
        <RNTextInput
          className={cn(
            textAreaVariants({
              variant: inputVariant,
              size
            }),
            className
          )}
          ref={ref}
          multiline={multiline}
          editable={props.editable !== false}
          {...props}
        />
        {(error || helperText) && (
          <RNText
            className={cn(
              "mt-1 text-xs",
              error ? "text-error" : "text-gray-500",
              helperTextClassName
            )}
          >
            {error || helperText}
          </RNText>
        )}
      </View>
    )
  }
)

TextArea.displayName = "TextInput"

export { TextArea }
export type { TextAreaProps }
