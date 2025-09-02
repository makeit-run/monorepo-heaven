import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiInputOTP, UiInputOTPGroup, UiInputOTPSlot } from "./UiInputOtp"

const meta: Meta<typeof UiInputOTP> = {
  title: "Components/InputOtp",
  component: UiInputOTP
} satisfies Meta<typeof UiInputOTP>

export default meta

type Story = StoryObj<typeof UiInputOTP>

export const Default: Story = {
  render: () => {
    return (
      <UiInputOTP maxLength={4}>
        <UiInputOTPGroup className={"gap-4"}>
          <UiInputOTPSlot error index={0} />
          <UiInputOTPSlot index={1} />
          <UiInputOTPSlot index={2} />
          <UiInputOTPSlot index={3} />
        </UiInputOTPGroup>
      </UiInputOTP>
    )
  }
}
