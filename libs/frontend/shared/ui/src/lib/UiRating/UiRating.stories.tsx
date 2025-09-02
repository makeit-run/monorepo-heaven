import { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"

import { UiRating } from "./UiRating"

const meta: Meta<typeof UiRating> = {
  title: "Components/Rating",
  component: UiRating,
  parameters: {
    controls: {
      include: ["value"]
    }
  }
} satisfies Meta<typeof UiRating>

export default meta

type Story = StoryObj<typeof UiRating>

export const Default: Story = {
  render: () => {
    const [data, setData] = useState(false)

    const toggleData = () => {
      setData(!data)
    }

    return (
      <div style={{}} className={"flex flex-col gap-4"}>
        <div>
          <span className="dela text-4xl">Typing</span>
        </div>
      </div>
    )
  }
}
