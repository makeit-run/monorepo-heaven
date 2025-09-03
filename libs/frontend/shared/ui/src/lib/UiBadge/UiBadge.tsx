import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@shared/utils/cn';
import { badgeVariants } from './config';

export interface UiBadgeProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function UiBadge({
  className,
  variant,
  asChild = false,
  ...props
}: UiBadgeProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { UiBadge, badgeVariants };
