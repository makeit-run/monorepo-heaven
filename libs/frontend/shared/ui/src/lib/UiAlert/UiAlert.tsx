import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@shared/utils/cn';
import {
  alertVariants,
  alertTitleVariants,
  alertDescriptionVariants,
} from './config';

interface UiAlertProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof alertVariants> {}

function UiAlert({ className, variant, ...props }: UiAlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiAlertTitleProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof alertTitleVariants> {}

function UiAlertTitle({ className, variant, ...props }: UiAlertTitleProps) {
  return (
    <div
      data-slot="alert-title"
      className={cn(alertTitleVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiAlertDescriptionProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof alertDescriptionVariants> {}

function UiAlertDescription({
  className,
  variant,
  ...props
}: UiAlertDescriptionProps) {
  return (
    <div
      data-slot="alert-description"
      className={cn(alertDescriptionVariants({ variant }), className)}
      {...props}
    />
  );
}

export { UiAlert, UiAlertTitle, UiAlertDescription };