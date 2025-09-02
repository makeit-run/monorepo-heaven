import type { Meta } from "@storybook/react"
import React, { useState } from "react"
import { Text, View } from "react-native"

import { Checkbox, type CheckboxProps } from "./Checkbox"

const variants = ["default", "secondary"] as const

const sizes = ["sm", "md", "lg"] as const

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox
}

export default meta

export const AllVariantsAndSizes = () => {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({})

  const handleCheckedChange = (id: string, checked: boolean) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: checked
    }))
  }

  return (
    <View style={{ padding: 16, gap: 24 }}>
      {variants.map((variant) => (
        <View key={variant} style={{ gap: 12 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 4 }}>{variant}</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center"
            }}
          >
            {sizes.map((size) => {
              const id = `${variant}-${size}`
              return (
                <View
                  key={id}
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <Checkbox
                    checked={checkedState[id] || false}
                    onCheckedChange={(checked) =>
                      handleCheckedChange(id, checked)
                    }
                    variant={variant}
                    size={size}
                  />
                  <Text>{`${variant} - ${size}`}</Text>
                </View>
              )
            })}
          </View>
        </View>
      ))}
    </View>
  )
}

export const Controlled = () => {
  const [checked, setChecked] = useState(false)

  return (
    <View style={{ padding: 16, gap: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked}
          variant="default"
          size="md"
        />
        <Text>Controlled checkbox: {checked ? "Checked" : "Unchecked"}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Text
          onPress={() => setChecked(!checked)}
          style={{ color: "blue", textDecorationLine: "underline" }}
        >
          Toggle
        </Text>
      </View>
    </View>
  )
}

export const Disabled = () => {
  return (
    <View style={{ padding: 16, gap: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Checkbox
          checked={false}
          onCheckedChange={() => {}}
          disabled
          variant="default"
        />
        <Text>Disabled unchecked</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Checkbox
          checked={true}
          onCheckedChange={() => {}}
          disabled
          variant="default"
        />
        <Text>Disabled checked</Text>
      </View>
    </View>
  )
}
