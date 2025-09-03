import { cva } from 'class-variance-authority';

export const calendarVariants = cva(
  'group/calendar [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
  {
    variants: {
      variant: {
        default: 'bg-background p-3',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const calendarRootVariants = cva('', {
  variants: {
    variant: {
      default: 'w-fit',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarMonthsVariants = cva('flex relative', {
  variants: {
    variant: {
      default: 'gap-4 flex-col md:flex-row',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarMonthVariants = cva('flex flex-col w-full', {
  variants: {
    variant: {
      default: 'gap-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarNavVariants = cva('flex items-center w-full absolute top-0 inset-x-0 justify-between', {
  variants: {
    variant: {
      default: 'gap-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarCaptionVariants = cva('flex items-center justify-center w-full', {
  variants: {
    variant: {
      default: 'h-(--cell-size) px-(--cell-size)',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarDropdownsVariants = cva('w-full flex items-center justify-center', {
  variants: {
    variant: {
      default: 'text-sm font-medium h-(--cell-size) gap-1.5',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarDropdownRootVariants = cva('relative has-focus:ring-[3px] rounded-md', {
  variants: {
    variant: {
      default: 'has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarDropdownVariants = cva('absolute inset-0', {
  variants: {
    variant: {
      default: 'bg-popover opacity-0',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarWeekdaysVariants = cva('flex', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarWeekdayVariants = cva('rounded-md flex-1 select-none', {
  variants: {
    variant: {
      default: 'text-muted-foreground font-normal text-[0.8rem]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarWeekVariants = cva('flex w-full', {
  variants: {
    variant: {
      default: 'mt-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarDayVariants = cva(
  'relative w-full h-full text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
  {
    variants: {
      variant: {
        default: 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const calendarDayButtonVariants = cva(
  'group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] flex aspect-square size-auto w-full flex-col gap-1 leading-none [&>span]:text-xs [&>span]:opacity-70',
  {
    variants: {
      variant: {
        default:
          'data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground min-w-(--cell-size) font-normal data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const calendarChevronVariants = cva('', {
  variants: {
    variant: {
      default: 'size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const calendarWeekNumberVariants = cva('flex items-center justify-center text-center', {
  variants: {
    variant: {
      default: 'size-(--cell-size)',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});