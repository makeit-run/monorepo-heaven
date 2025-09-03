'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import {
  dropdownMenuContentVariants,
  dropdownMenuItemVariants,
  dropdownMenuCheckboxItemVariants,
  dropdownMenuRadioItemVariants,
  dropdownMenuItemIndicatorVariants,
  dropdownMenuCheckIconVariants,
  dropdownMenuRadioIconVariants,
  dropdownMenuLabelVariants,
  dropdownMenuSeparatorVariants,
  dropdownMenuShortcutVariants,
  dropdownMenuSubTriggerVariants,
  dropdownMenuSubTriggerChevronVariants,
  dropdownMenuSubContentVariants,
} from './config';

function UiDropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function UiDropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal
      data-slot="dropdown-menu-portal"
      {...props}
    />
  );
}

function UiDropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

export interface UiDropdownMenuContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Content>,
    VariantProps<typeof dropdownMenuContentVariants> {}

function UiDropdownMenuContent({
  className,
  sideOffset = 4,
  variant,
  ...props
}: UiDropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(dropdownMenuContentVariants({ variant }), className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function UiDropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

export interface UiDropdownMenuItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenuItemVariants> {
  inset?: boolean;
}

function UiDropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: UiDropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(dropdownMenuItemVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDropdownMenuCheckboxItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>,
    VariantProps<typeof dropdownMenuCheckboxItemVariants> {}

function UiDropdownMenuCheckboxItem({
  className,
  children,
  checked,
  variant,
  ...props
}: UiDropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(dropdownMenuCheckboxItemVariants({ variant }), className)}
      checked={checked}
      {...props}
    >
      <span className={dropdownMenuItemIndicatorVariants({ variant })}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className={dropdownMenuCheckIconVariants({ variant })} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function UiDropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

export interface UiDropdownMenuRadioItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>,
    VariantProps<typeof dropdownMenuRadioItemVariants> {}

function UiDropdownMenuRadioItem({
  className,
  children,
  variant,
  ...props
}: UiDropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(dropdownMenuRadioItemVariants({ variant }), className)}
      {...props}
    >
      <span className={dropdownMenuItemIndicatorVariants({ variant })}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className={dropdownMenuRadioIconVariants({ variant })} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

export interface UiDropdownMenuLabelProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Label>,
    VariantProps<typeof dropdownMenuLabelVariants> {
  inset?: boolean;
}

function UiDropdownMenuLabel({
  className,
  inset,
  variant,
  ...props
}: UiDropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(dropdownMenuLabelVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDropdownMenuSeparatorProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator>,
    VariantProps<typeof dropdownMenuSeparatorVariants> {}

function UiDropdownMenuSeparator({
  className,
  variant,
  ...props
}: UiDropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(dropdownMenuSeparatorVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDropdownMenuShortcutProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof dropdownMenuShortcutVariants> {}

function UiDropdownMenuShortcut({
  className,
  variant,
  ...props
}: UiDropdownMenuShortcutProps) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(dropdownMenuShortcutVariants({ variant }), className)}
      {...props}
    />
  );
}

function UiDropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return (
    <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
  );
}

export interface UiDropdownMenuSubTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>,
    VariantProps<typeof dropdownMenuSubTriggerVariants> {
  inset?: boolean;
}

function UiDropdownMenuSubTrigger({
  className,
  inset,
  children,
  variant,
  ...props
}: UiDropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(dropdownMenuSubTriggerVariants({ variant }), className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className={dropdownMenuSubTriggerChevronVariants({ variant })} />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

export interface UiDropdownMenuSubContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>,
    VariantProps<typeof dropdownMenuSubContentVariants> {}

function UiDropdownMenuSubContent({
  className,
  variant,
  ...props
}: UiDropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(dropdownMenuSubContentVariants({ variant }), className)}
      {...props}
    />
  );
}

export {
  UiDropdownMenu,
  UiDropdownMenuPortal,
  UiDropdownMenuTrigger,
  UiDropdownMenuContent,
  UiDropdownMenuGroup,
  UiDropdownMenuLabel,
  UiDropdownMenuItem,
  UiDropdownMenuCheckboxItem,
  UiDropdownMenuRadioGroup,
  UiDropdownMenuRadioItem,
  UiDropdownMenuSeparator,
  UiDropdownMenuShortcut,
  UiDropdownMenuSub,
  UiDropdownMenuSubTrigger,
  UiDropdownMenuSubContent,
};