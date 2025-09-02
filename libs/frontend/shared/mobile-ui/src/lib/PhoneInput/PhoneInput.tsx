import React, { useState } from "react"
import { Text, View } from "react-native"
import type { VariantProps } from "tailwind-variants"

import { phoneInputVariants } from "@frontend/shared/mobile-ui/PhoneInput/config"

import {
  PhoneInputPrimitive,
  PhoneInputPrimitiveProps
} from "../@Primitives/components/PhoneInput"

interface PhoneInputComponentProps
  extends PhoneInputPrimitiveProps,
    VariantProps<typeof phoneInputVariants> {}

export const PhoneInputComponent: React.FC<PhoneInputComponentProps> = ({
  size,
  variant,
  onChangeText,
  ...rest
}) => {
  const [isDirty, setIsDirty] = useState(false)
  const [valid, setValid] = useState<boolean>(false)

  const styles = phoneInputVariants({ size, variant })

  const onChangeTextHandler = (text: string, isValid: boolean): void => {
    setIsDirty(!!text)
    console.log("isValid", isValid)
    setValid(isValid)

    onChangeText?.(text, isValid)
  }

  return (
    <View className="w-full">
      <Text className="mb-1 text-sm font-medium text-gray-700">
        Phone Number
      </Text>
      <View className="w-full">
        <PhoneInputPrimitive
          onChangeText={onChangeTextHandler}
          containerClassName={styles.container()}
          textContainerClassName={styles.phoneContainer()}
          codeTextClassName={styles.code()}
          textInputClassName={styles.phone()}
          flagButtonClassName={styles.countryPicker()}
          placeholder={"(000) 000 0000"}
          {...rest}
        />
      </View>

      {isDirty && !valid && (
        <Text className="text-error mt-1 text-xs">
          Please enter a valid phone number
        </Text>
      )}
    </View>
  )
}

export default PhoneInputComponent
