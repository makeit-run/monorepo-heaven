'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import {
  drawerOverlayVariants,
  drawerContentVariants,
  drawerHandleVariants,
  drawerHeaderVariants,
  drawerFooterVariants,
  drawerTitleVariants,
  drawerDescriptionVariants,
} from './config';

function UiDrawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function UiDrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function UiDrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function UiDrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

export interface UiDrawerOverlayProps
  extends React.ComponentProps<typeof DrawerPrimitive.Overlay>,
    VariantProps<typeof drawerOverlayVariants> {}

function UiDrawerOverlay({
  className,
  variant,
  ...props
}: UiDrawerOverlayProps) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(drawerOverlayVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDrawerContentProps
  extends React.ComponentProps<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerContentVariants> {}

function UiDrawerContent({
  className,
  children,
  variant,
  ...props
}: UiDrawerContentProps) {
  return (
    <UiDrawerPortal data-slot="drawer-portal">
      <UiDrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(drawerContentVariants({ variant }), className)}
        {...props}
      >
        <div className={drawerHandleVariants({ variant })} />
        {children}
      </DrawerPrimitive.Content>
    </UiDrawerPortal>
  );
}

export interface UiDrawerHeaderProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof drawerHeaderVariants> {}

function UiDrawerHeader({ className, variant, ...props }: UiDrawerHeaderProps) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(drawerHeaderVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDrawerFooterProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof drawerFooterVariants> {}

function UiDrawerFooter({ className, variant, ...props }: UiDrawerFooterProps) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(drawerFooterVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDrawerTitleProps
  extends React.ComponentProps<typeof DrawerPrimitive.Title>,
    VariantProps<typeof drawerTitleVariants> {}

function UiDrawerTitle({ className, variant, ...props }: UiDrawerTitleProps) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(drawerTitleVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiDrawerDescriptionProps
  extends React.ComponentProps<typeof DrawerPrimitive.Description>,
    VariantProps<typeof drawerDescriptionVariants> {}

function UiDrawerDescription({
  className,
  variant,
  ...props
}: UiDrawerDescriptionProps) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(drawerDescriptionVariants({ variant }), className)}
      {...props}
    />
  );
}

export {
  UiDrawer,
  UiDrawerPortal,
  UiDrawerOverlay,
  UiDrawerTrigger,
  UiDrawerClose,
  UiDrawerContent,
  UiDrawerHeader,
  UiDrawerFooter,
  UiDrawerTitle,
  UiDrawerDescription,
};