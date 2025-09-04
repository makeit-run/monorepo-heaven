import React, { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import { X } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal, {
  type DateTimePickerProps,
} from 'react-native-modal-datetime-picker';
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { VariantProps } from 'class-variance-authority';
import { cn } from '@shared/utils/cn';

import {
  datePickerVariants,
  datePickerContainerVariants,
  datePickerTextVariants,
  datePickerPlaceholderVariants,
  datePickerClearButtonVariants,
  datePickerClearIconVariants,
} from '@frontend/shared/mobile-ui/DatePicker/config';
import { LucideIcon } from '@frontend/shared/mobile-ui/LucideIcon';

// Create context for variant propagation
const DatePickerContext = React.createContext<{
  variant?: VariantProps<typeof datePickerVariants>['variant'];
  size?: VariantProps<typeof datePickerVariants>['size'];
}>({ variant: 'default', size: 'default' });

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

interface DatePickerProps
  extends Partial<Omit<DateTimePickerProps, 'onConfirm'>>,
    VariantProps<typeof datePickerVariants> {
  format?: string;
  locale?: string;
  className?: string;
  placeholder?: string;
  showRelativeTime?: boolean;
  //
  onConfirm?: (date: Date | null) => void;
}

export function DatePicker({
  mode = 'date',
  variant = 'default',
  size = 'default',
  format,
  locale,
  className = '',
  placeholder,
  showRelativeTime = false,
  onCancel,
  onConfirm,
  date,
  ...rest
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(date || null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (locale) {
    try {
      dayjs.locale(locale);
    } catch (e) {
      console.warn(`Locale ${locale} not loaded for dayjs`);
    }
  }

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const onConfirmHandler = (date: Date) => {
    setSelectedDate(date);
    toggleVisible();
    onConfirm?.(date);
  };

  const onCancelHandler = () => {
    toggleVisible();
    onCancel?.();
  };

  const onClickClear = (e: GestureResponderEvent) => {
    setSelectedDate(null);
    onConfirm?.(null);
  };

  const getPlaceholder = () => {
    if (placeholder) return placeholder;

    const defaultValue = 'Search...';
    if (!mode) return defaultValue;

    const variants: {
      [key in NonNullable<DateTimePickerProps['mode']>]: string;
    } = {
      date: 'Select date...',
      time: 'Select time...',
      datetime: 'Select date and time...',
    };

    return variants?.[mode] || defaultValue;
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return getPlaceholder();

    const dayjsDate = dayjs(date);

    if (showRelativeTime) {
      return dayjsDate.fromNow();
    }

    if (format) {
      return dayjsDate.format(format);
    }

    switch (mode) {
      case 'date':
        return dayjsDate.format('YYYY-MM-DD');
      case 'time':
        return dayjsDate.format('HH:mm');
      case 'datetime':
      default:
        return dayjsDate.format('YYYY-MM-DD HH:mm');
    }
  };

  return (
    <DatePickerContext.Provider value={{ variant, size }}>
      <View className={cn(datePickerContainerVariants({ variant }), className)}>
        <TouchableOpacity
          className={cn(datePickerVariants({ variant, size }))}
          onPress={toggleVisible}
          style={{ flex: 1 }}
        >
          {selectedDate ? (
            <Text className={cn(datePickerTextVariants({ variant }))}>
              {formatDate(selectedDate)}
            </Text>
          ) : (
            <Text className={cn(datePickerPlaceholderVariants({ variant }))}>
              {getPlaceholder()}
            </Text>
          )}
        </TouchableOpacity>
        <View className={cn(datePickerClearButtonVariants({ variant }))}>
          <TouchableOpacity onPress={onClickClear}>
            <LucideIcon
              size={20}
              icon={X}
              className={cn(datePickerClearIconVariants({ variant }))}
            />
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          mode={mode}
          date={selectedDate || undefined}
          isVisible={isVisible}
          onConfirm={onConfirmHandler}
          onCancel={onCancelHandler}
          {...rest}
        />
      </View>
    </DatePickerContext.Provider>
  );
}
