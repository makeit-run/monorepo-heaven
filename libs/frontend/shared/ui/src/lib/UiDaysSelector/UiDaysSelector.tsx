import { cn } from "@shared/utils/cn"
import type { VariantProps } from "class-variance-authority"
import React from "react"

import { UiText } from "../UiText"
import { UiToggleGroup, UiToggleGroupItem } from "../UiToggleGroup"
import { daysSelectorItemStyles, daysSelectorStyles } from "./config"
import { DayKeys, days } from "./days"

interface UiDaysSelectorProps extends VariantProps<typeof daysSelectorStyles> {
  selectedDays: DayKeys[]
  onDaysSelected: (days: DayKeys[]) => void
  className?: string
  itemVariant?: VariantProps<typeof daysSelectorItemStyles>["variant"]
  itemSize?: VariantProps<typeof daysSelectorItemStyles>["size"]
}

export function UiDaysSelector({
  onDaysSelected,
  selectedDays,
  className,
  variant,
  size,
  layout,
  itemVariant = "default",
  itemSize = "default"
}: UiDaysSelectorProps) {
  const onDaysSelectedHandler = (value: string[]) => {
    onDaysSelected(value as DayKeys[])
  }

  return (
    <UiToggleGroup
      className={cn(daysSelectorStyles({ variant, size, layout }), className)}
      value={selectedDays}
      onValueChange={onDaysSelectedHandler}
      type="multiple"
    >
      {days.map((day) => (
        <UiToggleGroupItem
          key={day.key}
          value={day.key}
          aria-label={`Toggle ${day.display}`}
          className={cn(
            daysSelectorItemStyles({ variant: itemVariant, size: itemSize })
          )}
        >
          {day.key}
        </UiToggleGroupItem>
      ))}
    </UiToggleGroup>
  )
}
