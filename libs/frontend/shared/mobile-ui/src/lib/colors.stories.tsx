import type { Meta, StoryObj } from "@storybook/react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { PaperProvider } from "react-native-paper"

import { lightTheme } from "../../../feature-themeing/src/lib/themes/light/light"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./Accordion"
import { Text } from "./Text"

function Example() {
  const groupColors = (colors: any) => {
    const groups: Record<string, Record<string, string>> = {}

    for (const [key, value] of Object.entries(colors)) {
      if (typeof value === "object" && value !== null && key !== "DEFAULT") {
        const flattenedGroup: Record<string, string> = {}

        if ("DEFAULT" in value && typeof value.DEFAULT === "string") {
          flattenedGroup["DEFAULT"] = value.DEFAULT
        }

        for (const [subKey, subValue] of Object.entries(value)) {
          if (subKey !== "DEFAULT" && typeof subValue === "string") {
            flattenedGroup[subKey] = subValue
          }
        }

        groups[key] = flattenedGroup
      }
    }

    return groups
  }

  const colorGroups = groupColors(lightTheme.colors)

  return (
    <ScrollView className="p-6 font-sans">
      <View className="mb-6 text-2xl font-bold">Theme Colors</View>
      <Accordion type="multiple" className="w-full space-y-2">
        {Object.entries(colorGroups).map(([groupName, colors]) => (
          <AccordionItem
            key={groupName}
            value={groupName}
            className="rounded-lg border"
          >
            <AccordionTrigger className="px-4 py-2 hover:bg-gray-50">
              <Text className="font-medium capitalize">{groupName}</Text>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <ScrollView className="mt-2 flex flex-wrap gap-4">
                {Object.entries(colors).map(([colorName, colorValue]) => (
                  <View
                    key={`${groupName}-${colorName}`}
                    className="shadow-xs w-32 overflow-hidden rounded-md border border-gray-200"
                  >
                    <View
                      className="h-10 w-full"
                      style={{ backgroundColor: colorValue }}
                    />
                    <View className="p-3">
                      <View className="mb-1 truncate text-sm font-semibold">
                        <Text> {colorName}</Text>
                      </View>
                      <View className="font-mono text-xs text-gray-500">
                        <Text>{colorValue}</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollView>
  )
}

const meta: Meta = {
  component: Example,
  title: "Base/Colors",
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

export const Default: Story = {}
