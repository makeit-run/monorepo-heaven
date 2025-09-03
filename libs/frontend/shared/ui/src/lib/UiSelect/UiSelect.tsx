'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';

// Create context for variant propagation
const SelectContext = React.createContext<{
  variant?: string;
  size?: 'sm' | 'default';
}>({ variant: 'default', size: 'default' });
import {
  selectTriggerVariants,
  selectTriggerIconVariants,
  selectContentVariants,
  selectViewportVariants,
  selectLabelVariants,
  selectItemVariants,
  selectItemIndicatorVariants,
  selectItemIndicatorIconVariants,
  selectSeparatorVariants,
  selectScrollButtonVariants,
  selectScrollButtonIconVariants,
} from './config';

function UiSelect({
  variant = 'default',
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root> & {
  variant?: string;
  size?: 'sm' | 'default';
}) {
  return (
    <SelectContext.Provider value={{ variant, size }}>
      <SelectPrimitive.Root data-slot="select" {...props}>
        {children}
      </SelectPrimitive.Root>
    </SelectContext.Provider>
  );
}

function UiSelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function UiSelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function UiSelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  const { variant, size } = React.useContext(SelectContext);
  
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(selectTriggerVariants({ variant: variant as any }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className={cn(selectTriggerIconVariants({ variant: variant as any }))} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function UiSelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  const { variant } = React.useContext(SelectContext);
  
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          selectContentVariants({ 
            variant: variant as any, 
            position: position === 'popper' ? 'popper' : 'item-aligned' 
          }),
          className
        )}
        position={position}
        {...props}
      >
        <UiSelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            selectViewportVariants({ 
              variant: variant as any, 
              position: position === 'popper' ? 'popper' : 'item-aligned' 
            })
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <UiSelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function UiSelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  const { variant } = React.useContext(SelectContext);
  
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(selectLabelVariants({ variant: variant as any }), className)}
      {...props}
    />
  );
}

function UiSelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  const { variant } = React.useContext(SelectContext);
  
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(selectItemVariants({ variant: variant as any }), className)}
      {...props}
    >
      <span className={cn(selectItemIndicatorVariants({ variant: variant as any }))}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className={cn(selectItemIndicatorIconVariants({ variant: variant as any }))} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function UiSelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  const { variant } = React.useContext(SelectContext);
  
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(selectSeparatorVariants({ variant: variant as any }), className)}
      {...props}
    />
  );
}

function UiSelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  const { variant } = React.useContext(SelectContext);
  
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(selectScrollButtonVariants({ variant: variant as any }), className)}
      {...props}
    >
      <ChevronUpIcon className={cn(selectScrollButtonIconVariants({ variant: variant as any }))} />
    </SelectPrimitive.ScrollUpButton>
  );
}

function UiSelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  const { variant } = React.useContext(SelectContext);
  
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(selectScrollButtonVariants({ variant: variant as any }), className)}
      {...props}
    >
      <ChevronDownIcon className={cn(selectScrollButtonIconVariants({ variant: variant as any }))} />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  UiSelect,
  UiSelectContent,
  UiSelectGroup,
  UiSelectItem,
  UiSelectLabel,
  UiSelectScrollDownButton,
  UiSelectScrollUpButton,
  UiSelectSeparator,
  UiSelectTrigger,
  UiSelectValue,
};
