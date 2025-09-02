import React from "react"
import { View } from "react-native"
import {
  GestureHandlerRootView,
  ScrollView
} from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { PortalHost } from "../src/lib/@Primitives/components/Portal"

import "../global.css"

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },

  decorators: [
    (Story, { parameters }) => (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View
              style={{
                height: "100%",
                flex: 1,
                backgroundColor: "#ffffff",
                padding: 8
              }}
            >
              <Story />
            </View>
          </ScrollView>
        </GestureHandlerRootView>
        <PortalHost />
      </SafeAreaProvider>
    )
  ]
}

export default preview
