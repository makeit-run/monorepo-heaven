// UiPrice.tsx для React Native
import { cn } from "@shared/utils/cn"
import numeral from "numeral"
import React from "react"
import { View } from "react-native"

import { Text } from "../Text"

interface UiPriceProps {
  value: number
  pattern?: string
  currency?: string
  className?: string
}

export const Price = ({
  value,
  pattern,
  className,
  currency = "$"
}: UiPriceProps) => {
  const formattedString = numeral(value).format(pattern || "(0,0.00)")
  const base = formattedString.split(".")?.[0]
  const decimals = formattedString.split(".")?.[1]

  return (
    <View
      className={cn("text-primary flex-row justify-start gap-0.5", className)}
    >
      <Text className={"text-nowrap text-base"}>{currency}</Text>
      <Text className={"text-nowrap text-xl leading-[30px]"}>{base}</Text>
      <Text className={"text-nowrap text-base"}>{decimals}</Text>
    </View>
  )
}
