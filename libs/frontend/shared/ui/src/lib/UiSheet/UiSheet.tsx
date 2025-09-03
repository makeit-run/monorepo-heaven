'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@shared/utils/cn';
import {
  sheetOverlayVariants,
  sheetContentVariants,
  sheetCloseVariants,
  sheetCloseIconVariants,
  sheetHeaderVariants,
  sheetFooterVariants,
  sheetTitleVariants,
  sheetDescriptionVariants,
} from './config';

function UiSheet({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function UiSheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function UiSheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function UiSheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function UiSheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(sheetOverlayVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiSheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
}) {
  return (
    <UiSheetPortal>
      <UiSheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(sheetContentVariants({ variant: 'default', side }), className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className={cn(sheetCloseVariants({ variant: 'default' }))}>
          <XIcon className={cn(sheetCloseIconVariants({ variant: 'default' }))} />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </UiSheetPortal>
  );
}

function UiSheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(sheetHeaderVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiSheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(sheetFooterVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiSheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(sheetTitleVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiSheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(sheetDescriptionVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

export {
  UiSheet,
  UiSheetTrigger,
  UiSheetClose,
  UiSheetContent,
  UiSheetHeader,
  UiSheetFooter,
  UiSheetTitle,
  UiSheetDescription,
};
