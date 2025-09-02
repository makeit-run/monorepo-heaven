import { Meta } from "@storybook/react"
import React, { useState } from "react"

import { UiButton } from "../UiButton"
import { UiTextInput } from "../UiTextInput"
import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogFooter,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger
} from "./UiDialog"

const meta: Meta<typeof UiDialog> = {
  title: "Components/Dialog",
  component: UiDialog
}

export default meta

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <UiDialog onOpenChange={(open) => setIsOpen(open)} open={isOpen}>
      <UiDialogTrigger asChild>
        <UiButton variant="text">Edit Profile</UiButton>
      </UiDialogTrigger>
      <UiDialogContent className="p-4 sm:max-w-screen-md">
        <UiDialogHeader className={"flex flex-col"}>
          <UiDialogTitle>Edit profile</UiDialogTitle>
          <UiDialogDescription>
            Make changes to your profile here. Click save when you're done.
          </UiDialogDescription>
        </UiDialogHeader>
        <UiTextInput id="name" value="Pedro Duarte" className="col-span-3" />
        <UiTextInput id="username" value="@peduarte" className="col-span-3" />
        <UiDialogFooter>
          <UiButton onClick={() => setIsOpen(false)} type="submit">
            Save changes
          </UiButton>
        </UiDialogFooter>
      </UiDialogContent>
    </UiDialog>
  )
}
