'use client';

import * as React from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';
import { type VariantProps } from 'class-variance-authority';

import { UiButton, buttonVariants } from '../UiButton';
import { cn } from '@shared/utils/cn';
import {
  calendarVariants,
  calendarRootVariants,
  calendarMonthsVariants,
  calendarMonthVariants,
  calendarNavVariants,
  calendarCaptionVariants,
  calendarDropdownsVariants,
  calendarDropdownRootVariants,
  calendarDropdownVariants,
  calendarWeekdaysVariants,
  calendarWeekdayVariants,
  calendarWeekVariants,
  calendarDayVariants,
  calendarDayButtonVariants,
  calendarChevronVariants,
  calendarWeekNumberVariants,
} from './config';

type UiCalendarProps = React.ComponentProps<typeof DayPicker> &
  VariantProps<typeof calendarVariants> & {
    buttonVariant?: React.ComponentProps<typeof UiButton>['variant'];
  };

function UiCalendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  variant,
  ...props
}: UiCalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        calendarVariants({ variant }),
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn(calendarRootVariants({ variant }), defaultClassNames.root),
        months: cn(
          calendarMonthsVariants({ variant }),
          defaultClassNames.months
        ),
        month: cn(calendarMonthVariants({ variant }), defaultClassNames.month),
        nav: cn(calendarNavVariants({ variant }), defaultClassNames.nav),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_next
        ),
        month_caption: cn(
          calendarCaptionVariants({ variant }),
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          calendarDropdownsVariants({ variant }),
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          calendarDropdownRootVariants({ variant }),
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          calendarDropdownVariants({ variant }),
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5',
          defaultClassNames.caption_label
        ),
        table: 'w-full border-collapse',
        weekdays: cn(
          calendarWeekdaysVariants({ variant }),
          defaultClassNames.weekdays
        ),
        weekday: cn(
          calendarWeekdayVariants({ variant }),
          defaultClassNames.weekday
        ),
        week: cn(calendarWeekVariants({ variant }), defaultClassNames.week),
        week_number_header: cn(
          'select-none w-(--cell-size)',
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          'text-[0.8rem] select-none text-muted-foreground',
          defaultClassNames.week_number
        ),
        day: cn(calendarDayVariants({ variant }), defaultClassNames.day),
        range_start: cn(
          'rounded-l-md bg-accent',
          defaultClassNames.range_start
        ),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
        today: cn(
          'bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none',
          defaultClassNames.today
        ),
        outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.outside
        ),
        disabled: cn(
          'text-muted-foreground opacity-50',
          defaultClassNames.disabled
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeftIcon
                className={cn(calendarChevronVariants({ variant }), className)}
                {...props}
              />
            );
          }

          if (orientation === 'right') {
            return (
              <ChevronRightIcon
                className={cn(calendarChevronVariants({ variant }), className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon
              className={cn(calendarChevronVariants({ variant }), className)}
              {...props}
            />
          );
        },
        DayButton: (props) => (
          <UiCalendarDayButton {...props} variant={variant} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className={calendarWeekNumberVariants({ variant })}>
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

type UiCalendarDayButtonProps = React.ComponentProps<typeof DayButton> &
  VariantProps<typeof calendarDayButtonVariants>;

function UiCalendarDayButton({
  className,
  day,
  modifiers,
  variant,
  ...props
}: UiCalendarDayButtonProps) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <UiButton
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        calendarDayButtonVariants({ variant }),
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}

export { UiCalendar, UiCalendarDayButton };
