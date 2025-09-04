import DateTimePicker from 'react-native-ui-datepicker';

import { dateRangePickerVariants } from '@frontend/shared/mobile-ui/DateRangePicker/config';
import type { Dayjs } from 'dayjs';
type DateTimePickerProps = React.ComponentProps<typeof DateTimePicker>;

type DateRangePickerProps = Omit<DateTimePickerProps, 'mode'> & {
  onChange: (params: {
    startDate: string | number | Dayjs | Date | null | undefined;
    endDate: string | number | Dayjs | Date | null | undefined;
  }) => void;
};

export function DateRangePicker({
  classNames,
  ...props
}: DateRangePickerProps) {
  const slots = dateRangePickerVariants();

  const getSlotsStyles = () => {
    return Object.entries(slots).reduce(
      (acc: any, [key, styles]: [string, any]) => {
        acc[key] = styles();
        return acc;
      },
      {}
    );
  };

  return (
    <DateTimePicker
      firstDayOfWeek={1}
      mode="range"
      classNames={{ ...getSlotsStyles(), ...classNames }}
      {...props}
    />
  );
}
