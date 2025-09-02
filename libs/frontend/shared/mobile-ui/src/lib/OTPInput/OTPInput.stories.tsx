import type { Meta } from "@storybook/react"
import { View } from "react-native"

import { OtpInput } from "./OTPInput"

export function Example() {
  return (
    <View className="gap-4 p-4">
      <OtpInput />
      <OtpInput placeholder={"*"} />
    </View>
  )
}
const meta: Meta<typeof OtpInput> = {
  title: "Components/OtpInput2",
  component: OtpInput
}

export default meta
