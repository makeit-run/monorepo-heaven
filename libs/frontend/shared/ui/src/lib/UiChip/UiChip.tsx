import { cn } from '@shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { chipStyles } from './config';

export interface UiChipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof chipStyles> {}

export function UiChip({
  size,
  color,
  className,
  children,
  ...props
}: UiChipProps) {
  return (
    <div className={cn(chipStyles({ size, color }), className)} {...props}>
      {children}
    </div>
  );
}
