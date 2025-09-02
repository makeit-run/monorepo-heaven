import { Meta, StoryObj } from "@storybook/react"

import { UiCountryInput } from "./UiCountryInput"

const meta: Meta<typeof UiCountryInput> = {
  title: "Components/UiCountryInput",
  component: UiCountryInput
} satisfies Meta<typeof UiCountryInput>

export default meta

type Story = StoryObj<typeof UiCountryInput>

export const Default: Story = {}
