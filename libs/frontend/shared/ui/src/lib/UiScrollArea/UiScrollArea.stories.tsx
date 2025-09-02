import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiScrollArea } from "./UiScrollArea"

const meta: Meta<typeof UiScrollArea> = {
  title: "components/ScrollArea",
  component: UiScrollArea
} satisfies Meta<typeof UiScrollArea>

export default meta

type Story = StoryObj<typeof UiScrollArea>

export const Default: Story = {
  render: () => {
    return (
      <UiScrollArea className="h-50 w-87.5 rounded-md border p-4">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester. And then, one day, the people of the kingdom discovered
        that the jokes left by Jokester were so funny that they couldn't help
        but laugh. And once they started laughing, they couldn't stop.
      </UiScrollArea>
    )
  }
}
