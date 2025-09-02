import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { View } from "react-native"

import PhoneInputComponent from "./PhoneInput"

export const Example = () => {
  const handlePhoneChange = (phoneNumber: string, isValid: boolean) => {
    console.log(phoneNumber, isValid)
  }

  return (
    <View className="p-4">
      <PhoneInputComponent onChangeFormattedText={handlePhoneChange} />
    </View>
  )
}
const meta: Meta = {
  component: PhoneInputComponent,
  title: "Components/PhoneInput"
}
export default meta

type Story = StoryObj
