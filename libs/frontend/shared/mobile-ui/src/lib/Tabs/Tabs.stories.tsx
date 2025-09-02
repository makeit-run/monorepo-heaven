import type { Meta } from "@storybook/react"
import React from "react"
import { Text, View } from "react-native"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs"

const meta: Meta = {
  title: "Components/Tabs",
  component: Tabs
}

export default meta

export const Default = () => {
  const [value, setValue] = React.useState("tab1")

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList>
        <TabsTrigger value="tab1">
          <Text>Tab 1</Text>
        </TabsTrigger>
        <TabsTrigger value="tab2">
          <Text>Tab 2</Text>
        </TabsTrigger>
        <TabsTrigger value="tab3">
          <Text>Tab 3</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Text>Tab 1 content</Text>
      </TabsContent>
      <TabsContent value="tab2">
        <Text>Tab 2 content</Text>
      </TabsContent>
      <TabsContent value="tab3">
        <Text>Tab 3 content</Text>
      </TabsContent>
    </Tabs>
  )
}

export const Outline = () => {
  const [value, setValue] = React.useState("tab1")

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList>
        <TabsTrigger value="tab1">
          <Text>Tab 1</Text>
        </TabsTrigger>
        <TabsTrigger value="tab2">
          <Text>Tab 2</Text>
        </TabsTrigger>
        <TabsTrigger value="tab3">
          <Text>Tab 3</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Text>Tab 1 content</Text>
      </TabsContent>
      <TabsContent value="tab2">
        <Text>Tab 2 content</Text>
      </TabsContent>
      <TabsContent value="tab3">
        <Text>Tab 3 content</Text>
      </TabsContent>
    </Tabs>
  )
}
