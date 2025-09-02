'use client';

import { DialogProps } from '@radix-ui/react-dialog';
import { cn } from '@shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import { Command as CommandPrimitive } from 'cmdk';
import { Loader, X } from 'lucide-react';
import * as React from 'react';

import { UiButton } from '../UiButton/UiButton';
import { UiDialog, UiDialogContent } from '../UiDialog';
import {
  commandDialogStyles,
  commandEmptyStyles,
  commandGroupStyles,
  commandInputStyles,
  commandItemStyles,
  commandListStyles,
  commandSeparatorStyles,
  commandShortcutStyles,
  commandStyles,
} from './config';

const UiCommandLoading = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Loading>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Loading>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Loading
    ref={ref}
    className={cn(commandItemStyles({}), className)}
    {...props}
  />
));
UiCommandLoading.displayName = CommandPrimitive.Loading.displayName;

const UiCommand = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> &
    VariantProps<typeof commandStyles>
>(({ variant, className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(commandStyles({ variant }), className)}
    {...props}
  />
));
UiCommand.displayName = CommandPrimitive.displayName;

interface CommandDialogProps
  extends DialogProps,
    VariantProps<typeof commandDialogStyles> {}

const UiCommandDialog = ({
  variant,
  children,
  ...props
}: CommandDialogProps) => {
  return (
    <UiDialog {...props}>
      <UiDialogContent className="overflow-hidden p-0 shadow-lg">
        <UiCommand className={commandDialogStyles({ variant })}>
          {children}
        </UiCommand>
      </UiDialogContent>
    </UiDialog>
  );
};

interface UiCommandInputProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>,
    VariantProps<typeof commandInputStyles> {
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onDelete?: (() => void | null | undefined) | undefined;
}

const UiCommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  UiCommandInputProps
>(
  (
    {
      iconPosition = 'right',
      onDelete,
      variant,
      className,
      loading,
      icon,
      ...props
    },
    ref
  ) => (
    <div
      className={cn('relative flex items-center', {
        '[&_>svg]:opacity-50': props?.disabled,
      })}
    >
      {iconPosition === 'left' && icon}
      <CommandPrimitive.Input
        ref={ref}
        className={cn(commandInputStyles({ variant }), className)}
        {...props}
      />
      {iconPosition === 'right' && !loading && icon}
      {loading ? (
        <div className="absolute bottom-0 right-4 top-1/2 z-10 flex -translate-y-2/4 items-center justify-center">
          <Loader className="text-primary animate-spin" />
        </div>
      ) : (
        onDelete &&
        !loading && (
          <UiButton onClick={onDelete} className="mr-3" variant={'text'}>
            <X className={'size-5'} />
          </UiButton>
        )
      )}
    </div>
  )
);

UiCommandInput.displayName = CommandPrimitive.Input.displayName;

const UiCommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> &
    VariantProps<typeof commandListStyles>
>(({ variant, className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(commandListStyles({ variant }), className)}
    {...props}
  />
));

UiCommandList.displayName = CommandPrimitive.List.displayName;

const UiCommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> &
    VariantProps<typeof commandEmptyStyles>
>(({ variant, ...rest }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={commandEmptyStyles({ variant })}
    {...rest}
  />
));

UiCommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const UiCommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> &
    VariantProps<typeof commandGroupStyles>
>(({ className, variant, ...rest }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(commandGroupStyles({ variant }), className)}
    {...rest}
  />
));

UiCommandGroup.displayName = CommandPrimitive.Group.displayName;

const UiCommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> &
    VariantProps<typeof commandSeparatorStyles>
>(({ className, variant, ...rest }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(commandSeparatorStyles({ variant }), className)}
    {...rest}
  />
));
UiCommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const UiCommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> &
    VariantProps<typeof commandItemStyles>
>(({ variant, className, ...rest }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(commandItemStyles({ variant }), className)}
    {...rest}
  />
));

UiCommandItem.displayName = CommandPrimitive.Item.displayName;

interface UiCommandShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof commandShortcutStyles> {}

const UiCommandShortcut = ({
  className,
  variant,
  ...rest
}: UiCommandShortcutProps) => {
  return (
    <span
      className={cn(commandShortcutStyles({ variant }), className)}
      {...rest}
    />
  );
};
UiCommandShortcut.displayName = 'CommandShortcut';

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
  UiCommandLoading,
  type UiCommandInputProps,
};
