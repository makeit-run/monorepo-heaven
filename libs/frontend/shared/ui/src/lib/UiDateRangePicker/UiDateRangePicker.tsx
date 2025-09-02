"use client"

import { cn } from "@shared/utils/cn"
import type { VariantProps } from "class-variance-authority"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"
import { DayPickerRangeProps } from "react-day-picker"

import { UiCalendar } from "../UiCalendar"
import { UiPopover, UiPopoverContent, UiPopoverTrigger } from "../UiPopover"
import { datePickerRangeTriggerStyles } from "./config"

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime)

interface UiDatePickerProps
  extends Omit<DayPickerRangeProps, "mode">,
    VariantProps<typeof datePickerRangeTriggerStyles> {
  triggerClassName?: string
}

function UiDateRangePicker({
  selected,
  className,
  numberOfMonths = 2,
  triggerClassName,
  size,
  variant,
  ...rest
}: UiDatePickerProps) {
  return (
    <div className={cn("grid w-fit gap-2", className)}>
      <UiPopover>
        <UiPopoverTrigger
          id="date"
          className={cn(
            datePickerRangeTriggerStyles({ variant, size }),
            { "text-gray-400": !selected },
            triggerClassName
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {selected?.from ? (
            selected.to ? (
              <>
                {dayjs(selected.from).format("MMM DD, YYYY")} -{" "}
                {dayjs(selected.to).format("MMM DD, YYYY")}
              </>
            ) : (
              dayjs(selected.from).format("MMM DD, YYYY")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </UiPopoverTrigger>
        <UiPopoverContent className="w-auto p-0" align="start">
          <UiCalendar
            initialFocus
            mode="range"
            defaultMonth={selected?.from}
            selected={selected}
            numberOfMonths={numberOfMonths}
            {...rest}
          />
        </UiPopoverContent>
      </UiPopover>
    </div>
  )
}

export { UiDateRangePicker }
