"use client"

import { cn } from "@shared/utils/cn"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

const UiDrawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
UiDrawer.displayName = "Drawer"

const UiDrawerTrigger = DrawerPrimitive.Trigger

const UiDrawerPortal = DrawerPrimitive.Portal

const UiDrawerClose = DrawerPrimitive.Close

const UiDrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
UiDrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const UiDrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <UiDrawerPortal>
    <UiDrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "rounded-t-2.5 fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col border bg-white",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full" />
      {children}
    </DrawerPrimitive.Content>
  </UiDrawerPortal>
))
UiDrawerContent.displayName = "DrawerContent"

const UiDrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
UiDrawerHeader.displayName = "DrawerHeader"

const UiDrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
UiDrawerFooter.displayName = "DrawerFooter"

const UiDrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
UiDrawerTitle.displayName = DrawerPrimitive.Title.displayName

const UiDrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
))
UiDrawerDescription.displayName = DrawerPrimitive.Description.displayName

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
  UiDrawerDescription
}
