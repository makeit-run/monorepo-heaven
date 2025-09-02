import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import {
  UiAccordion,
  UiAccordionContent,
  UiAccordionItem,
  UiAccordionTrigger
} from "./UiAccordion"

const meta: Meta<typeof UiAccordion> = {
  title: "Components/Accordion",
  component: UiAccordion
} satisfies Meta<typeof UiAccordion>

export default meta

type Story = StoryObj<typeof UiAccordion>

export const Default: Story = {
  render: () => {
    return (
      <UiAccordion type="single" collapsible>
        <UiAccordionItem value="item-1">
          <UiAccordionTrigger>Is it accessible?</UiAccordionTrigger>
          <UiAccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    )
  }
}
