'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import {
  dialogOverlayVariants,
  dialogContentVariants,
  dialogCloseVariants,
  dialogHeaderVariants,
  dialogFooterVariants,
  dialogTitleVariants,
  dialogDescriptionVariants,
} from './config';

function UiDialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function UiDialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function UiDialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function UiDialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

export interface UiDialogOverlayProps
  extends React.ComponentProps<typeof DialogPrimitive.Overlay>,
    VariantProps<typeof dialogOverlayVariants> {}

function UiDialogOverlay({
  className,
  variant,
  ...props
}: UiDialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(dialogOverlayVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  showCloseButton?: boolean;
  withCloseBtn?: boolean; // legacy prop
}

function UiDialogContent({
  className,
  children,
  showCloseButton = true,
  withCloseBtn = true, // legacy support
  variant,
  ...props
}: UiDialogContentProps) {
  const shouldShowClose = showCloseButton ?? withCloseBtn;

  return (
    <UiDialogPortal data-slot="dialog-portal">
      <UiDialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(dialogContentVariants({ variant }), className)}
        {...props}
      >
        {children}
        {shouldShowClose && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className={dialogCloseVariants({ variant })}
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </UiDialogPortal>
  );
}

export interface UiDialogHeaderProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof dialogHeaderVariants> {}

function UiDialogHeader({ className, variant, ...props }: UiDialogHeaderProps) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(dialogHeaderVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDialogFooterProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof dialogFooterVariants> {}

function UiDialogFooter({ className, variant, ...props }: UiDialogFooterProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(dialogFooterVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDialogTitleProps
  extends React.ComponentProps<typeof DialogPrimitive.Title>,
    VariantProps<typeof dialogTitleVariants> {}

function UiDialogTitle({ className, variant, ...props }: UiDialogTitleProps) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(dialogTitleVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDialogDescriptionProps
  extends React.ComponentProps<typeof DialogPrimitive.Description>,
    VariantProps<typeof dialogDescriptionVariants> {}

function UiDialogDescription({
  className,
  variant,
  ...props
}: UiDialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(dialogDescriptionVariants({ variant }), className)}
      {...props}
    />
  );
}

export {
  UiDialog,
  UiDialogClose,
  UiDialogContent,
  UiDialogDescription,
  UiDialogFooter,
  UiDialogHeader,
  UiDialogOverlay,
  UiDialogPortal,
  UiDialogTitle,
  UiDialogTrigger,
};