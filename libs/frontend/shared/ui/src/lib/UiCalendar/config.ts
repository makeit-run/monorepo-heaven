import { cn } from '@shared/utils/cn';
// import { ClassNames } from 'react-day-picker';

import { buttonStyles } from '../UiButton';

export const calendarClassNames: any = {
  root: 'w-fit',
  months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
  month: 'space-y-4',
  caption: 'flex justify-center pt-1 relative items-center',
  caption_label: 'text-sm font-medium',
  nav: 'space-x-1 flex items-center',
  nav_button: cn(
    buttonStyles({ variant: 'text' }),
    'size-10 cursor-pointer bg-transparent p-0 opacity-50 hover:opacity-100'
  ),
  nav_button_previous: 'absolute left-1',
  nav_button_next: 'absolute right-1',
  table: 'w-full border-collapse space-y-1',
  head_row: 'flex',
  head_cell: 'rounded-md w-9 text-black font-normal text-[0.8rem]',
  row: 'flex w-full mt-2',
  cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
  day: cn(
    buttonStyles({ variant: 'text' }),
    'size-9 cursor-pointer p-0 font-normal aria-selected:opacity-100 aria-selected:!text-white'
  ),
  day_range_end: 'day-range-end',
  day_selected:
    '!bg-primary text-white hover:bg-primary hover:shadow-lg focus:bg-primary focus:text-white',
  day_today: '!bg-gray-300',
  day_outside:
    'day-outside text-gray-400 opacity-50 aria-selected:bg-primary/50 aria-selected:text-black',
  day_disabled: 'text-gray-400 opacity-50',
  day_range_middle:
    'aria-selected:bg-accent aria-selected:text-accent-foreground',
  day_hidden: 'invisible',
};
