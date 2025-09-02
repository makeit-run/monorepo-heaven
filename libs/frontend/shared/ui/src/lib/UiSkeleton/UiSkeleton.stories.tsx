import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiSkeleton } from "./UiSkeleton"

const meta: Meta<typeof UiSkeleton> = {
  title: "Components/Skeleton",
  component: UiSkeleton
} satisfies Meta<typeof UiSkeleton>

export default meta

type Story = StoryObj<typeof UiSkeleton>

export const Default: Story = {
  render: () => {
    return (
      <div className={"flex flex-col gap-10"}>
        <div className="flex flex-col space-y-3">
          <UiSkeleton className="h-25 w-52 rounded-xl" />
          <div className="space-y-2">
            <UiSkeleton className="h-4 w-52" />
            <UiSkeleton className="h-4 w-52" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <UiSkeleton className="size-12 rounded-full" />
          <div className="space-y-2">
            <UiSkeleton className="w-25 h-4" />
            <UiSkeleton className="w-25 h-4" />
          </div>
        </div>
      </div>
    )
  }
}
