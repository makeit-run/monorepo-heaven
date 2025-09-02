"use client"

import { cn } from "@shared/utils/cn"
import React, { forwardRef, useRef } from "react"
import { TimeValue, useDateSegment, useLocale, useTimeField } from "react-aria"
import {
  DateFieldState,
  DateSegment as IDateSegment,
  TimeFieldStateOptions,
  useTimeFieldState
} from "react-stately"

import { dateSegmentStyles, timeFieldStyles, timePickerStyles } from "./config"

interface DateSegmentProps {
  segment: IDateSegment
  state: DateFieldState
}

function UiDateSegment({ segment, state }: DateSegmentProps) {
  const ref = useRef(null)

  const {
    segmentProps: { ...segmentProps }
  } = useDateSegment(segment, state, ref)

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={dateSegmentStyles({
        type: segment?.type,
        className: cn({ "text-muted-foreground": segment.isPlaceholder })
      })}
    >
      {segment.text}
    </div>
  )
}

const UiTimeField = forwardRef<HTMLDivElement, UiTimeFieldProps>(
  (props, innerRef) => {
    const { locale } = useLocale()
    const state = useTimeFieldState({
      ...props,
      locale
    })
    const ref = innerRef as React.RefObject<HTMLDivElement>
    const { fieldProps, labelProps } = useTimeField(props, state, ref)

    return (
      <div
        {...fieldProps}
        ref={ref}
        className={timeFieldStyles({
          className: cn(
            { "cursor-not-allowed opacity-50": props.isDisabled },
            props?.className
          )
        })}
      >
        {state.segments.map((segment, i) => (
          <UiDateSegment key={i} segment={segment} state={state} />
        ))}
      </div>
    )
  }
)

UiTimeField.displayName = "UiTimeField"

interface UiTimeFieldProps
  extends Omit<TimeFieldStateOptions<TimeValue>, "locale"> {
  className?: string
}

interface UiTimePickerProps
  extends Omit<TimeFieldStateOptions<TimeValue>, "locale"> {
  className?: string
}
const UiTimePicker = React.forwardRef<HTMLDivElement, UiTimeFieldProps>(
  ({ className, ...rest }, ref) => {
    return (
      <UiTimeField
        ref={ref}
        className={timePickerStyles({ className })}
        {...rest}
      />
    )
  }
)

UiTimePicker.displayName = "TimePicker"

export { UiTimePicker }
