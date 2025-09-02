import { Meta, StoryObj } from "@storybook/react"

import { UiCurrencyInput } from "./UiCurrencyInput"

const meta: Meta<typeof UiCurrencyInput> = {
  title: "Components/Currency Input",
  component: UiCurrencyInput
} satisfies Meta<typeof UiCurrencyInput>

export default meta

type Story = StoryObj<typeof UiCurrencyInput>

export const Default: Story = {}
