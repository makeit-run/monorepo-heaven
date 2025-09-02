import React from "react"

import { Text, TextClassContext } from "@frontend/shared/mobile-ui/Text"
import {
  ToggleGroup,
  ToggleGroupItem
} from "@frontend/shared/mobile-ui/ToggleGroup"

import { DayKeys, days } from "./days"

interface DaysSelectorProps {
  selectedDays: DayKeys[]
  onDaysSelected: (days: DayKeys[]) => void
}

export function DaysSelector({
  onDaysSelected,
  selectedDays
}: DaysSelectorProps) {
  const onDaysSelectedHandler = (value: string[]) => {
    onDaysSelected(value as DayKeys[])
  }

  return (
    <ToggleGroup
      className={"justify-between gap-3"}
      value={selectedDays}
      onValueChange={onDaysSelectedHandler}
      type="multiple"
    >
      {days.map((day) => (
        <ToggleGroupItem
          key={day.key}
          value={day.key}
          aria-label={`Toggle ${day.display}`}
        >
          <ToggleText>{day.key}</ToggleText>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

const ToggleText = (props: React.ComponentProps<typeof Text>) => {
  const textClass = React.useContext(TextClassContext)

  return <Text className={textClass} {...props} />
}
