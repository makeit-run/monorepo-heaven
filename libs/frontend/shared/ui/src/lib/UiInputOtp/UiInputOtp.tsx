'use client';

import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import {
  inputOTPVariants,
  inputOTPGroupVariants,
  inputOTPSlotVariants,
  inputOTPSeparatorVariants,
  inputOTPCaretVariants,
  inputOTPCaretLineVariants,
} from './config';

export interface UiInputOTPProps
  extends React.ComponentProps<typeof OTPInput>,
    VariantProps<typeof inputOTPVariants> {
  containerClassName?: string;
}

function UiInputOTP({
  className,
  containerClassName,
  variant,
  ...props
}: UiInputOTPProps) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'flex items-center gap-2 has-disabled:opacity-50',
        containerClassName
      )}
      className={cn(inputOTPVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiInputOTPGroupProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof inputOTPGroupVariants> {}

function UiInputOTPGroup({
  className,
  variant,
  ...props
}: UiInputOTPGroupProps) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(inputOTPGroupVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiInputOTPSlotProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof inputOTPSlotVariants> {
  index: number;
}

function UiInputOTPSlot({
  index,
  className,
  variant,
  ...props
}: UiInputOTPSlotProps) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(inputOTPSlotVariants({ variant }), className)}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className={inputOTPCaretVariants({ variant })}>
          <div className={inputOTPCaretLineVariants({ variant })} />
        </div>
      )}
    </div>
  );
}

export interface UiInputOTPSeparatorProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof inputOTPSeparatorVariants> {}

function UiInputOTPSeparator({
  className,
  variant,
  ...props
}: UiInputOTPSeparatorProps) {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className={cn(inputOTPSeparatorVariants({ variant }), className)}
      {...props}
    >
      <MinusIcon />
    </div>
  );
}

export { UiInputOTP, UiInputOTPGroup, UiInputOTPSlot, UiInputOTPSeparator };
