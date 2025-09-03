import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@shared/utils/cn';
import { buttonVariants } from './config';

export interface UiButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function UiButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: UiButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { UiButton, buttonVariants };
