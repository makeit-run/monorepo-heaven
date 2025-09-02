import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { PaperProvider } from "react-native-paper"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./Accordion"

export const Example = () => (
  <Accordion type="single" collapsible defaultValue={"item-1"}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Section 1</AccordionTrigger>
      <AccordionContent>This is the content of section 1.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Section 2</AccordionTrigger>
      <AccordionContent>This is the content of section 2.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Section 3</AccordionTrigger>
      <AccordionContent>This is the content of section 3.</AccordionContent>
    </AccordionItem>
  </Accordion>
)

const meta: Meta = {
  component: Example,
  title: "Components/Accordion",
  decorators: [
    (Story) => (
      <PaperProvider>
        <Story />
      </PaperProvider>
    )
  ]
}
export default meta

type Story = StoryObj

export const Primary: Story = {
  args: {}
}
