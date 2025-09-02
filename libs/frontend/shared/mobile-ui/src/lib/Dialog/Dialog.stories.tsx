import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { PortalHost } from "../@Primitives/components/Portal"
import { Button } from "../Button"
import { Text } from "../Text"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./Dialog"

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Text>Edit Profile</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>
              <Text>OK</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
const meta: Meta = {
  component: Dialog,
  title: "Components/Dialog",
  decorators: [
    (Story) => (
      <>
        <Story />
        <PortalHost />
      </>
    )
  ]
}
export default meta

type Story = StoryObj
