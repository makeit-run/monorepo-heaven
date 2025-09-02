import { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"

import { UiButton } from "../UiButton"
import { UiModal } from "./UiModal"

type Story = StoryObj<typeof UiModal>

const meta: Meta<typeof UiModal> = {
  title: "Components/Modal",
  component: UiModal,
  parameters: {
    controls: {
      include: ["scrollType", "variant"]
    }
  }
}

export default meta

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <UiButton onClick={() => setOpen(!open)}>Open Modal</UiButton>
        <UiModal open={open} onOpenChange={setOpen} {...args}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            cupiditate, dolorum ducimus earum, libero nulla odio perspiciatis
            provident quas quibusdam saepe ullam voluptates voluptatum? Culpa ea
            hic officia officiis totam?
          </div>
        </UiModal>
      </>
    )
  }
}

export const WithLogo: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <UiButton onClick={() => setOpen(!open)}>Open Modal</UiButton>
        <UiModal open={open} onOpenChange={setOpen} {...args}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            cupiditate, dolorum ducimus earum, libero nulla odio perspiciatis
            provident quas quibusdam saepe ullam voluptates voluptatum? Culpa ea
            hic officia officiis totam?
          </div>
        </UiModal>
      </>
    )
  }
}
export const WithScroll: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <UiButton onClick={() => setOpen(!open)}>Open Modal</UiButton>
        <UiModal open={open} onOpenChange={setOpen} {...args}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
            <div key={i}>
              Asperiores cupiditate exercitationem fuga inventore ipsum
              molestias officia, quam sapiente sed. Accusamus aperiam aspernatur
              beatae eos est, et id libero neque omnis optio! Nulla,
              reprehenderit, velit. Debitis expedita illo similique.
            </div>
          ))}
        </UiModal>
      </>
    )
  }
}
