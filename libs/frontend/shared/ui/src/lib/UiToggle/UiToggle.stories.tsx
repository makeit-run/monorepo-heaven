import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiToggle } from "./UiToggle"

const meta: Meta<typeof UiToggle> = {
  title: "Components/Toggle",
  component: UiToggle,
  parameters: {
    controls: {
      include: []
    }
  }
}

export default meta

type Story = StoryObj<typeof UiToggle>

export const Default: Story = {
  render: () => {
    return (
      <div className={"flex flex-col gap-2"}>
        <div className={"flex gap-2"}>
          <UiToggle variant={"outline"} size={"sm"} />
          <UiToggle variant={"outline"} size={"sm"}>
            Toggle
          </UiToggle>
        </div>
        <div className={"flex gap-2"}>
          <UiToggle variant={"outline"} />
          <UiToggle variant={"outline"}>Toggle</UiToggle>
        </div>
        <div className={"flex gap-2"}>
          <UiToggle variant={"outline"} size={"lg"} />
          <UiToggle variant={"outline"} size={"lg"}>
            Toggle
          </UiToggle>
        </div>
        <div className={"mt-4 flex gap-2"}>
          <UiToggle size={"sm"} />
          <UiToggle size={"sm"}>Toggle</UiToggle>
        </div>
        <div className={"flex gap-2"}>
          <UiToggle />
          <UiToggle>Toggle</UiToggle>
        </div>
        <div className={"flex gap-2"}>
          <UiToggle size={"lg"} />
          <UiToggle size={"lg"}>Toggle</UiToggle>
        </div>
      </div>
    )
  }
}
