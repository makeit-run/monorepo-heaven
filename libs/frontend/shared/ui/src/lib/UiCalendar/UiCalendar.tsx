"use client"

import { cn } from "@shared/utils/cn"
import { ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"
import { DayPicker } from "react-day-picker"

import { calendarClassNames } from "./config"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function UiCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{ ...calendarClassNames, ...classNames }}
      components={{
        IconLeft: () => <ChevronLeft />,
        IconRight: () => <ChevronRight />
      }}
      {...props}
    />
  )
}

UiCalendar.displayName = "UiCalendar"

export { UiCalendar }
