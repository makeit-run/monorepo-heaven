'use client';

import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';

import { UiButton } from '../UiButton/UiButton';
import { UiCalendar } from '../UiCalendar/UiCalendar';
import { UiLabel } from '../UiLabel/UiLabel';
import {
  UiPopover,
  UiPopoverContent,
  UiPopoverTrigger,
} from '../UiPopover/UiPopover';
import { cn } from '@shared/utils/cn';
import {
  datePickerContainerVariants,
  datePickerLabelVariants,
  datePickerTriggerVariants,
  datePickerPopoverContentVariants,
} from './config';

export interface UiDatePickerProps extends VariantProps<typeof datePickerContainerVariants> {
  label?: string;
  placeholder?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  className?: string;
  disabled?: boolean;
}

export function UiDatePicker({
  label = 'Date of birth',
  placeholder = 'Select date',
  value,
  onChange,
  className,
  disabled = false,
  variant,
}: UiDatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value);

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onChange?.(selectedDate);
    setOpen(false);
  };

  return (
    <div className={cn(datePickerContainerVariants({ variant }), className)}>
      <UiLabel htmlFor="date" className={datePickerLabelVariants({ variant })}>
        {label}
      </UiLabel>
      <UiPopover open={open} onOpenChange={setOpen}>
        <UiPopoverTrigger asChild>
          <UiButton
            variant="outline"
            id="date"
            className={datePickerTriggerVariants({ variant })}
            disabled={disabled}
          >
            {date ? date.toLocaleDateString() : placeholder}
            <ChevronDownIcon />
          </UiButton>
        </UiPopoverTrigger>
        <UiPopoverContent
          className={datePickerPopoverContentVariants({ variant })}
          align="start"
        >
          <UiCalendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={handleDateSelect}
          />
        </UiPopoverContent>
      </UiPopover>
    </div>
  );
}