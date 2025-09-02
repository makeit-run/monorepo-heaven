import { cn } from "@shared/utils/cn"
import React from "react"
import { Text, TouchableOpacity } from "react-native"

interface MultiSelectDefaultOptionProps<T> {
  item: T
  isSelected: boolean
  onSelect: () => void
  className?: string
  getOptionLabel: (option: T) => string
}

export function MultiSelectDefaultOption<T>({
  item,
  isSelected,
  onSelect,
  className,
  getOptionLabel
}: MultiSelectDefaultOptionProps<T>): React.ReactElement {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Text
        className={cn(
          isSelected ? "bg-primary-100/10 font-bold" : "",
          className
        )}
      >
        {getOptionLabel(item)}
      </Text>
    </TouchableOpacity>
  )
}
