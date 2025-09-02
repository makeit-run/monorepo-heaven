import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiToggleGroup, UiToggleGroupItem } from "./UiToggleGroup"

const meta: Meta<typeof UiToggleGroup> = {
  title: "Components/ToggleGroup",
  component: UiToggleGroup,
  parameters: {
    controls: {
      include: []
    }
  }
}

export default meta

type Story = StoryObj<typeof UiToggleGroup>

export const Default: Story = {
  render: () => {
    return (
      <div className={"flex flex-col gap-4"}>
        <div
          className={
            "flex w-fit flex-col items-center gap-2 rounded-md border-4 p-6 shadow-md"
          }
        >
          <span className={"font-bold"}>Single</span>
          <div className={"flex gap-4"}>
            <UiToggleGroup type="single">
              <UiToggleGroupItem value="a">A</UiToggleGroupItem>
              <UiToggleGroupItem value="b">B</UiToggleGroupItem>
              <UiToggleGroupItem value="c">C</UiToggleGroupItem>
            </UiToggleGroup>
            <UiToggleGroup type="single">
              <UiToggleGroupItem variant={"outline"} value="a">
                A
              </UiToggleGroupItem>
              <UiToggleGroupItem variant={"outline"} value="b">
                B
              </UiToggleGroupItem>
              <UiToggleGroupItem variant={"outline"} value="c">
                C
              </UiToggleGroupItem>
            </UiToggleGroup>
          </div>
        </div>
        <div
          className={
            "flex w-fit flex-col items-center gap-2 rounded-md border-4 p-6 shadow-md"
          }
        >
          <span className={"font-bold"}>Multiple</span>
          <div className={"flex gap-4"}>
            <UiToggleGroup type="multiple">
              <UiToggleGroupItem value="a">A</UiToggleGroupItem>
              <UiToggleGroupItem value="b">B</UiToggleGroupItem>
              <UiToggleGroupItem value="c">C</UiToggleGroupItem>
            </UiToggleGroup>
            <UiToggleGroup type="multiple">
              <UiToggleGroupItem variant={"outline"} value="a">
                A
              </UiToggleGroupItem>
              <UiToggleGroupItem variant={"outline"} value="b">
                B
              </UiToggleGroupItem>
              <UiToggleGroupItem variant={"outline"} value="c">
                C
              </UiToggleGroupItem>
            </UiToggleGroup>
          </div>
        </div>
      </div>
    )
  }
}
