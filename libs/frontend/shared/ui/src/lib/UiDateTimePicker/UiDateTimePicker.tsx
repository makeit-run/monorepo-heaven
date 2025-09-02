"use client"

import {
  isToday as _isToday,
  CalendarDate,
  createCalendar,
  fromDate,
  getLocalTimeZone,
  getWeeksInMonth,
  parseDateTime,
  toCalendarDate,
  toCalendarDateTime
} from "@internationalized/date"
import { DateSegment as IDateSegment } from "@react-stately/datepicker"
import { cn } from "@shared/utils/cn"
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  X
} from "lucide-react"
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from "react"
import {
  AriaDatePickerProps,
  AriaTimeFieldProps,
  CalendarProps,
  DateValue,
  TimeValue,
  useButton,
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
  useDateField,
  useDatePicker,
  useDateSegment,
  useLocale,
  useTimeField
} from "react-aria"
import {
  CalendarState,
  DateFieldState,
  DatePickerState,
  DatePickerStateOptions,
  TimeFieldStateOptions,
  useCalendarState,
  useDateFieldState,
  useDatePickerState,
  useTimeFieldState
} from "react-stately"

import { UiButton } from "../UiButton"
import { UiPopover, UiPopoverContent, UiPopoverTrigger } from "../UiPopover"

function UiCalendar(props: CalendarProps<DateValue>) {
  const prevButtonRef = React.useRef<HTMLButtonElement | null>(null)
  const nextButtonRef = React.useRef<HTMLButtonElement | null>(null)

  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar
  })
  const {
    calendarProps,
    prevButtonProps: _prevButtonProps,
    nextButtonProps: _nextButtonProps,
    title
  } = useCalendar(props, state)
  const { buttonProps: prevButtonProps } = useButton(
    _prevButtonProps,
    prevButtonRef
  )
  const { buttonProps: nextButtonProps } = useButton(
    _nextButtonProps,
    nextButtonRef
  )

  return (
    <div {...calendarProps} className="space-y-4">
      <div className="relative flex items-center justify-center pt-1">
        <UiButton
          {...prevButtonProps}
          ref={prevButtonRef}
          variant="text"
          color={"primary"}
          className={cn(
            "absolute left-1 size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          )}
        >
          <ChevronLeftIcon className="size-4" />
        </UiButton>
        <div className="text-sm font-medium">{title}</div>
        <UiButton
          {...nextButtonProps}
          ref={nextButtonRef}
          variant="text"
          color={"primary"}
          className={cn(
            "absolute right-1 size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          )}
        >
          <ChevronRightIcon className="size-4" />
        </UiButton>
      </div>
      <UiCalendarGrid state={state} />
    </div>
  )
}

interface CalendarGridProps {
  state: CalendarState
}

function UiCalendarGrid({ state, ...props }: CalendarGridProps) {
  const { locale } = useLocale()
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state)

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <table
      {...gridProps}
      className={cn(gridProps.className, "w-full border-collapse space-y-1")}
    >
      <thead {...headerProps}>
        <tr className="flex">
          {weekDays.map((day, index) => (
            <th
              className="w-9 rounded-md text-[0.8rem] font-normal text-black"
              key={index}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr className="mt-2 flex w-full" key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <UiCalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

interface CalendarCellProps {
  state: CalendarState
  date: CalendarDate
}

function UiCalendarCell({ state, date }: CalendarCellProps) {
  const ref = React.useRef<HTMLButtonElement | null>(null)
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    formattedDate
  } = useCalendarCell({ date }, state, ref)

  const isToday = useMemo(() => {
    const timezone = getLocalTimeZone()
    return _isToday(date, timezone)
  }, [date])

  return (
    <td
      {...cellProps}
      className={cn(
        cellProps.className,
        "[&:has([aria-selected])]:bg-primary relative text-center text-sm focus-within:relative focus-within:z-20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
      )}
    >
      <UiButton
        {...buttonProps}
        type="button"
        variant="ghost"
        ref={ref}
        className={cn(
          buttonProps.className,
          "size-9",
          { "!bg-primary-100 text-black-700": isToday },
          {
            "!bg-primary focus:bg-primary text-white focus:text-white":
              isSelected
          },
          {
            "text-black opacity-50": isOutsideVisibleRange || isDisabled
          }
        )}
      >
        {formattedDate}
      </UiButton>
    </td>
  )
}

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
      className={cn(
        "focus:bg-primary-100 focus:rounded-[2px] focus:text-black focus:outline-none",
        { "px-px": segment?.type !== "literal" },
        { "text-black": segment?.isPlaceholder }
      )}
    >
      {segment?.text}
    </div>
  )
}

function UiDateField(props: AriaDatePickerProps<DateValue>) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { locale } = useLocale()
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  })
  const { fieldProps } = useDateField(props, state, ref)

  return (
    <div
      {...fieldProps}
      ref={ref}
      className={cn(
        "border-input ring-offset-primary focus-visible:ring-ring inline-flex h-10 flex-1 items-center rounded-l-md bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        props.isDisabled && "cursor-not-allowed opacity-50"
      )}
    >
      {state?.segments.map((segment, i) => (
        <UiDateSegment key={i} segment={segment} state={state} />
      ))}
      {state?.isInvalid && <span aria-hidden="true">🚫</span>}
    </div>
  )
}

function UiTimeField(props: AriaTimeFieldProps<TimeValue>) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { locale } = useLocale()
  const state = useTimeFieldState({
    ...props,
    locale
  })
  const {
    fieldProps: { ...fieldProps },
    labelProps
  } = useTimeField(props, state, ref)

  return (
    <div
      {...fieldProps}
      ref={ref}
      className={cn(
        "ring-offset-primary focus-within:ring-ring focus-visible:ring-ring inline-flex h-10 w-full flex-1 rounded-md border bg-transparent px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        props?.isDisabled && "cursor-not-allowed opacity-50"
      )}
    >
      {state?.segments.map((segment, i) => (
        <UiDateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  )
}

const UiTimePicker = React.forwardRef<
  HTMLDivElement,
  Omit<TimeFieldStateOptions<TimeValue>, "locale">
>((props, forwardedRef) => {
  return <UiTimeField {...props} />
})

UiTimePicker.displayName = "TimePicker"

export type DateTimePickerRef = {
  divRef: HTMLDivElement | null
  buttonRef: HTMLButtonElement | null
  contentRef: HTMLDivElement | null
  jsDate: Date | null
  state: DatePickerState
}

const UiDateTimePicker = React.forwardRef<
  DateTimePickerRef,
  DatePickerStateOptions<DateValue> & {
    jsDate?: Date | null
    onJsDateChange?: (date: Date) => void
    showClearButton?: boolean
    containerClassName?: string
  }
>(
  (
    {
      jsDate,
      onJsDateChange,
      containerClassName,
      showClearButton = true,
      ...props
    },
    ref
  ) => {
    const divRef = useRef<HTMLDivElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const [jsDatetime, setJsDatetime] = useState(jsDate || null)

    const state = useDatePickerState(props)

    useImperativeHandle(ref, () => ({
      divRef: divRef.current,
      buttonRef: buttonRef.current,
      contentRef: contentRef.current,
      jsDate: jsDatetime,
      state
    }))

    const {
      groupProps,
      fieldProps,
      buttonProps: _buttonProps,
      dialogProps,
      calendarProps
    } = useDatePicker(props, state, divRef)

    const { buttonProps } = useButton(_buttonProps, buttonRef)
    const currentValue = useCallback(() => {
      if (!jsDatetime) {
        return null
      }

      const parsed = fromDate(jsDatetime, getLocalTimeZone())

      if (state.hasTime) {
        return toCalendarDateTime(parsed)
      }

      return toCalendarDate(parsed)
    }, [jsDatetime, state.hasTime])

    useEffect(() => {
      /**
       * If user types datetime, it will be a null value until we get the correct datetime.
       * This is controlled by react-aria.
       **/
      if (state.value) {
        const date = parseDateTime(state.value.toString()).toDate(
          getLocalTimeZone()
        )
        setJsDatetime(date)
        onJsDateChange?.(date)
      }
    }, [state.value, onJsDateChange])

    useEffect(() => {
      if (jsDate) {
        setJsDatetime(jsDate)
      }
    }, [jsDate])

    return (
      <div
        {...groupProps}
        ref={divRef}
        className={cn(
          groupProps.className,
          "inline-flex min-w-[220px] items-center rounded-md border border-black/30 bg-white py-2.5 focus-within:ring-2 focus-within:ring-offset-2",
          containerClassName
        )}
      >
        <UiPopover open={props.isOpen} onOpenChange={props.onOpenChange}>
          <UiPopoverTrigger
            className="border-r border-black/30 p-3"
            disabled={props.isDisabled}
            onClick={() => {
              state.setOpen(true)
            }}
            {...buttonProps}
          >
            <CalendarIcon className="size-5" />
          </UiPopoverTrigger>
          <UiPopoverContent ref={contentRef} className="w-full">
            <div {...dialogProps} className="space-y-3">
              <UiCalendar {...calendarProps} />
              {state?.hasTime && (
                <UiTimeField
                  value={state?.timeValue}
                  //@ts-ignore
                  onChange={state?.setTimeValue}
                  granularity={props?.granularity as any}
                />
              )}
            </div>
          </UiPopoverContent>
        </UiPopover>
        <UiDateField {...fieldProps} value={currentValue()} />
        <div className={cn("-ml-2 mr-2 size-5", !showClearButton && "hidden")}>
          <X
            className={cn(
              "text-primary-400 size-5 cursor-pointer",
              !jsDatetime && "hidden"
            )}
            onClick={() => setJsDatetime(null)}
          />
        </div>
      </div>
    )
  }
)

UiDateTimePicker.displayName = "UiDateTimePicker"

export { UiDateTimePicker }
