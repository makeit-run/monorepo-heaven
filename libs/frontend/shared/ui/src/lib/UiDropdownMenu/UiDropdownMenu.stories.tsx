import { Meta } from "@storybook/react"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users
} from "lucide-react"
import React from "react"

import { UiButton } from "../UiButton"
import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuGroup,
  UiDropdownMenuItem,
  UiDropdownMenuLabel,
  UiDropdownMenuPortal,
  UiDropdownMenuSeparator,
  UiDropdownMenuShortcut,
  UiDropdownMenuSub,
  UiDropdownMenuSubContent,
  UiDropdownMenuSubTrigger,
  UiDropdownMenuTrigger
} from "./UiDropdownMenu"

const meta: Meta<typeof UiDropdownMenu> = {
  title: "Components/DropdownMenu",
  component: UiDropdownMenu
}

export default meta

const Template = (args: any) => {
  const content = (
    <UiDropdownMenuContent className="w-56">
      <UiDropdownMenuLabel>My Account</UiDropdownMenuLabel>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuGroup>
        <UiDropdownMenuItem>
          <User className="mr-2 size-4" />
          <span>Profile</span>
          <UiDropdownMenuShortcut>⇧⌘P</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
        <UiDropdownMenuItem>
          <CreditCard className="mr-2 size-4" />
          <span>Billing</span>
          <UiDropdownMenuShortcut>⌘B</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
        <UiDropdownMenuItem>
          <Settings className="mr-2 size-4" />
          <span>Settings</span>
          <UiDropdownMenuShortcut>⌘S</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
        <UiDropdownMenuItem>
          <Keyboard className="mr-2 size-4" />
          <span>Keyboard shortcuts</span>
          <UiDropdownMenuShortcut>⌘K</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
      </UiDropdownMenuGroup>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuGroup>
        <UiDropdownMenuItem>
          <Users className="mr-2 size-4" />
          <span>Team</span>
        </UiDropdownMenuItem>
        <UiDropdownMenuSub>
          <UiDropdownMenuSubTrigger>
            <UserPlus className="mr-2 size-4" />
            <span>Invite users</span>
          </UiDropdownMenuSubTrigger>
          <UiDropdownMenuPortal>
            <UiDropdownMenuSubContent>
              <UiDropdownMenuItem>
                <Mail className="mr-2 size-4" />
                <span>Email</span>
              </UiDropdownMenuItem>
              <UiDropdownMenuItem>
                <MessageSquare className="mr-2 size-4" />
                <span>Message</span>
              </UiDropdownMenuItem>
              <UiDropdownMenuSeparator />
              <UiDropdownMenuItem>
                <PlusCircle className="mr-2 size-4" />
                <span>More...</span>
              </UiDropdownMenuItem>
            </UiDropdownMenuSubContent>
          </UiDropdownMenuPortal>
        </UiDropdownMenuSub>
        <UiDropdownMenuItem>
          <Plus className="mr-2 size-4" />
          <span>New Team</span>
          <UiDropdownMenuShortcut>⌘+T</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
      </UiDropdownMenuGroup>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuItem>
        <Github className="mr-2 size-4" />
        <span>GitHub</span>
      </UiDropdownMenuItem>
      <UiDropdownMenuItem>
        <LifeBuoy className="mr-2 size-4" />
        <span>Support</span>
      </UiDropdownMenuItem>
      <UiDropdownMenuItem disabled>
        <Cloud className="mr-2 size-4" />
        <span>API</span>
      </UiDropdownMenuItem>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuItem>
        <LogOut className="mr-2 size-4" />
        <span>Log out</span>
        <UiDropdownMenuShortcut>⇧⌘Q</UiDropdownMenuShortcut>
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  )
  return (
    <div className={"flex gap-5"}>
      <UiDropdownMenu {...args}>
        <UiDropdownMenuTrigger asChild>
          <UiButton>Open</UiButton>
        </UiDropdownMenuTrigger>
        {content}
      </UiDropdownMenu>
      <UiDropdownMenu {...args}>
        <UiDropdownMenuTrigger>Some text</UiDropdownMenuTrigger>
        {content}
      </UiDropdownMenu>
    </div>
  )
}

export const Default = Template.bind({})
