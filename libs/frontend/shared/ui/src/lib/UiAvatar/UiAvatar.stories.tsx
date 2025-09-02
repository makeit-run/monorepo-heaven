import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiAvatar, UiAvatarFallback, UiAvatarImage } from "./UiAvatar"

const meta: Meta<typeof UiAvatar> = {
  title: "Components/Avatar",
  component: UiAvatar
} satisfies Meta<typeof UiAvatar>

export default meta

type Story = StoryObj<typeof UiAvatar>

export const Default: Story = {
  render: () => {
    return (
      <div className={"flex gap-6"}>
        <div className={"flex flex-col items-center border p-4"}>
          With src
          <UiAvatar>
            <UiAvatarImage src="https://github.com/shadcn.png" />
            <UiAvatarFallback>CN</UiAvatarFallback>
          </UiAvatar>
        </div>
        <div className={"flex flex-col items-center border p-4"}>
          Without src
          <UiAvatar>
            <UiAvatarImage src={""} />
            <UiAvatarFallback>CN</UiAvatarFallback>
          </UiAvatar>
        </div>
      </div>
    )
  }
}
