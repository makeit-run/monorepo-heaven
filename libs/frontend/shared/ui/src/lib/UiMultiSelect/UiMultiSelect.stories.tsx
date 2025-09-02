import { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UiMultiSelect } from "./UiMultiSelect"

const meta: Meta<typeof UiMultiSelect> = {
  title: "Components/MultiSelect",
  component: UiMultiSelect
} satisfies Meta<typeof UiMultiSelect>

export default meta

type Story = StoryObj<typeof UiMultiSelect>

const FRAMEWORKS = [
  {
    value: "next.js",
    label: "Next.js"
  },
  {
    value: "sveltekit",
    label: "SvelteKit"
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js"
  },
  {
    value: "remix",
    label: "Remix"
  },
  {
    value: "astro",
    label: "Astro"
  },
  {
    value: "wordpress",
    label: "WordPress"
  },
  {
    value: "express.js",
    label: "Express.js"
  },
  {
    value: "nest.js",
    label: "Nest.js"
  }
]

export const Default: Story = {
  render: () => {
    return <UiMultiSelect data={FRAMEWORKS} />
  }
}
