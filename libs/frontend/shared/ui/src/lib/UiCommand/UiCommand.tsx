'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';

import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogHeader,
  UiDialogTitle,
} from '../UiDialog';
import { cn } from '@shared/utils/cn';
import {
  commandVariants,
  commandDialogContentVariants,
  commandDialogCommandVariants,
  commandInputWrapperVariants,
  commandInputIconVariants,
  commandInputVariants,
  commandListVariants,
  commandEmptyVariants,
  commandGroupVariants,
  commandSeparatorVariants,
  commandItemVariants,
  commandShortcutVariants,
} from './config';

export interface UiCommandProps
  extends React.ComponentProps<typeof CommandPrimitive>,
    VariantProps<typeof commandVariants> {}

function UiCommand({ className, variant, ...props }: UiCommandProps) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(commandVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiCommandDialogProps extends React.ComponentProps<typeof UiDialog> {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}

function UiCommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}: UiCommandDialogProps) {
  return (
    <UiDialog {...props}>
      <UiDialogHeader className="sr-only">
        <UiDialogTitle>{title}</UiDialogTitle>
        <UiDialogDescription>{description}</UiDialogDescription>
      </UiDialogHeader>
      <UiDialogContent
        className={cn(commandDialogContentVariants({}), className)}
        withCloseBtn={showCloseButton}
      >
        <UiCommand className={commandDialogCommandVariants({})}>
          {children}
        </UiCommand>
      </UiDialogContent>
    </UiDialog>
  );
}

export interface UiCommandInputProps
  extends React.ComponentProps<typeof CommandPrimitive.Input>,
    VariantProps<typeof commandInputVariants> {
  isLoading?: boolean;
  icon?: React.ReactNode;
}

function UiCommandInput({ className, variant, ...props }: UiCommandInputProps) {
  return (
    <div
      data-slot="command-input-wrapper"
      className={commandInputWrapperVariants({ variant })}
    >
      <SearchIcon className={commandInputIconVariants({ variant })} />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(commandInputVariants({ variant }), className)}
        {...props}
      />
    </div>
  );
}

export interface UiCommandListProps
  extends React.ComponentProps<typeof CommandPrimitive.List>,
    VariantProps<typeof commandListVariants> {}

function UiCommandList({ className, variant, ...props }: UiCommandListProps) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(commandListVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCommandEmptyProps
  extends React.ComponentProps<typeof CommandPrimitive.Empty>,
    VariantProps<typeof commandEmptyVariants> {}

function UiCommandEmpty({ variant, ...props }: UiCommandEmptyProps) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={commandEmptyVariants({ variant })}
      {...props}
    />
  );
}

export interface UiCommandGroupProps
  extends React.ComponentProps<typeof CommandPrimitive.Group>,
    VariantProps<typeof commandGroupVariants> {}

function UiCommandGroup({ className, variant, ...props }: UiCommandGroupProps) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(commandGroupVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCommandSeparatorProps
  extends React.ComponentProps<typeof CommandPrimitive.Separator>,
    VariantProps<typeof commandSeparatorVariants> {}

function UiCommandSeparator({
  className,
  variant,
  ...props
}: UiCommandSeparatorProps) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn(commandSeparatorVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCommandItemProps
  extends React.ComponentProps<typeof CommandPrimitive.Item>,
    VariantProps<typeof commandItemVariants> {}

function UiCommandItem({ className, variant, ...props }: UiCommandItemProps) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(commandItemVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCommandShortcutProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof commandShortcutVariants> {}

function UiCommandShortcut({
  className,
  variant,
  ...props
}: UiCommandShortcutProps) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(commandShortcutVariants({ variant }), className)}
      {...props}
    />
  );
}

export {
  UiCommand,
  UiCommandDialog,
  UiCommandInput,
  UiCommandList,
  UiCommandEmpty,
  UiCommandGroup,
  UiCommandItem,
  UiCommandShortcut,
  UiCommandSeparator,
};
