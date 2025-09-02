"use client"

import { cn } from "@shared/utils/cn"
import type { VariantProps } from "class-variance-authority"
import dayjs from "dayjs"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"
import { DayPickerSingleProps } from "react-day-picker"

import { UiCalendar } from "../UiCalendar"
import { UiPopover, UiPopoverContent, UiPopoverTrigger } from "../UiPopover"
import { UiText } from "../UiText/UiText"
import { datePickerTriggerStyles } from "./config"

interface UiDataRangePickerProps
  extends Omit<DayPickerSingleProps, "mode">,
    VariantProps<typeof datePickerTriggerStyles> {
  triggerClassName?: string
  containerClassName?: string
  label?: string
  calendarWrapperClassName?: string
  resetStyles?: boolean
  icon?: React.ReactNode
}

const UiDatePicker = React.forwardRef<HTMLDivElement, UiDataRangePickerProps>(
  (
    {
      variant,
      size,
      selected,
      triggerClassName,
      calendarWrapperClassName,
      label,
      containerClassName,
      resetStyles,
      icon,
      ...rest
    },
    ref
  ) => {
    return (
      <UiPopover>
        <div
          ref={ref}
          className={cn({ "min-w-52": !resetStyles }, containerClassName)}
        >
          {label && (
            <label
              className={
                "inline-block pb-2.5 text-[12px] font-medium text-gray-500"
              }
            >
              {label}
            </label>
          )}
          <UiPopoverTrigger
            disabled={!!rest?.disabled}
            className={cn(
              !resetStyles && datePickerTriggerStyles({ variant, size }),
              { "text-gray-400": !selected },
              triggerClassName
            )}
          >
            {icon === undefined ? (
              <CalendarIcon className="text-primary mr-2 size-5" />
            ) : (
              icon
            )}
            {selected ? (
              dayjs(selected).format("MMMM D, YYYY")
            ) : (
              <UiText variant={"body1"}>Pick a date</UiText>
            )}
          </UiPopoverTrigger>
          <UiPopoverContent
            className={cn("w-auto p-0", calendarWrapperClassName)}
          >
            <UiCalendar
              mode={"single"}
              selected={selected}
              initialFocus
              {...rest}
            />
          </UiPopoverContent>
        </div>
      </UiPopover>
    )
  }
)
UiDatePicker.displayName = UiDatePicker.name

export { UiDatePicker }
