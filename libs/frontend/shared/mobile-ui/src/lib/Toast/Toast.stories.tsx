import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { PortalHost } from "../@Primitives/components/Portal"
import { Toast, type ToastProps } from "./index"

const meta: Meta<ToastProps> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <SafeAreaProvider>
        <View style={{ flex: 1, padding: 16, backgroundColor: "#f5f5f5" }}>
          <Story />
        </View>
        <PortalHost />
      </SafeAreaProvider>
    )
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "info", "warning", "gray"],
      defaultValue: "info"
    },
    open: {
      control: "boolean",
      defaultValue: true
    },
    showClose: {
      control: "boolean",
      defaultValue: true
    },
    title: {
      control: "text"
    },
    description: {
      control: "text"
    },
    actionLabel: {
      control: "text"
    }
  }
}

export default meta
type Story = StoryObj<ToastProps>

export const Default: Story = {
  args: {
    open: true,
    title: "Toast Title",
    description: "This is a toast message with an info icon",
    variant: "info"
  }
}

export const Success: Story = {
  args: {
    open: true,
    variant: "success",
    title: "Success",
    description: "Operation completed successfully with a check icon"
  }
}

export const Error: Story = {
  args: {
    open: true,
    variant: "error",
    title: "Error",
    description: "Something went wrong with an alert circle icon"
  }
}

export const Warning: Story = {
  args: {
    open: true,
    variant: "warning",
    title: "Warning",
    description:
      "Please be careful with this action with a warning triangle icon"
  }
}

export const WithAction: Story = {
  args: {
    open: true,
    variant: "info",
    title: "Information",
    description: "Would you like to proceed?",
    actionLabel: "Proceed",
    onAction: () => console.log("Action clicked")
  }
}

export const NoClose: Story = {
  args: {
    open: true,
    variant: "success",
    title: "No Close Button",
    description: "This toast doesn't have a close button",
    showClose: false
  }
}

export const TitleOnly: Story = {
  args: {
    open: true,
    variant: "info",
    title: "Title Only Toast with Icon"
  }
}

export const DescriptionOnly: Story = {
  args: {
    open: true,
    variant: "info",
    description: "Description Only Toast with Icon"
  }
}

export const CustomStyles: Story = {
  args: {
    open: true,
    variant: "info",
    title: "Custom Styles",
    description: "This toast has custom styles with icons",
    titleClassName: "text-red-500 font-bold",
    descriptionClassName: "text-gray-700 italic",
    actionLabel: "Custom Action",
    actionClassName: "border-red-500",
    closeClassName: "bg-gray-200 rounded-full"
  }
}
