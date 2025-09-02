import type { Meta } from "@storybook/react"
import React from "react"
import { Text, View } from "react-native"

import { tagVariants } from "@frontend/shared/mobile-ui/Tag"
import { textAreaVariants } from "@frontend/shared/mobile-ui/TextArea/config"

import { TextArea, type TextAreaProps } from "./TextArea"

const meta: Meta<TextAreaProps> = {
  title: "Components/TextArea",
  component: TextArea
}

export default meta

export const AllVariantsAndSizes = () => {
  const variants: any[] = textAreaVariants?.variants?.variant
    ? Object.keys(tagVariants.variants.variant)
    : []

  const sizes: any[] = textAreaVariants?.variants?.size
    ? Object.keys(tagVariants.variants.size)
    : []

  return (
    <View style={{ padding: 16, gap: 24 }}>
      {variants.map((variant) => (
        <View key={variant} style={{ gap: 12 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 4 }}>{variant}</Text>
          <View style={{ gap: 12 }}>
            {sizes.map((size) => (
              <TextArea
                key={`${variant}-${size}`}
                variant={variant as any}
                size={size}
                placeholder={`${variant} - ${size}`}
                label={`${variant} - ${size}`}
                editable={variant !== "disabled"}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

export const WithMultiline = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      <TextArea
        label="Base"
        placeholder="Enter multiple lines of text"
        multiline
      />
      <TextArea
        label="With Error"
        placeholder="Enter multiple lines of text"
        multiline
        error="This field is required"
      />
    </View>
  )
}

export const WithTVOptimization = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      <TextArea
        label="TV Optimized "
        placeholder="Focus to see TV optimization"
        multiline
      />
    </View>
  )
}

export const WithHelperTextAndError = () => {
  return (
    <View style={{ padding: 16, gap: 24 }}>
      <TextArea
        label="Username"
        placeholder="Enter your username"
        helperText="Your unique identifier"
      />
      <TextArea
        label="Email"
        placeholder="Enter your email"
        error="Invalid email format"
      />
    </View>
  )
}
