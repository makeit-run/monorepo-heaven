import { cn } from "@shared/utils/cn"
import { X } from "lucide-react-native"
import * as React from "react"
import { Platform, StyleSheet, View, type ViewProps } from "react-native"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"

import { dialogContentVariants } from "@frontend/shared/mobile-ui/Dialog/config"
import { LucideIcon } from "@frontend/shared/mobile-ui/LucideIcon"

import * as DialogPrimitive from "../@Primitives/components/Dialog"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlayWeb = React.forwardRef<
  DialogPrimitive.OverlayRef,
  DialogPrimitive.OverlayProps
>(({ className, ...props }, ref) => {
  const { open } = DialogPrimitive.useRootContext()
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-black/80 p-2",
        open
          ? "web:animate-in web:fade-in-0"
          : "web:animate-out web:fade-out-0",
        className
      )}
      {...props}
      ref={ref}
    />
  )
})

DialogOverlayWeb.displayName = "DialogOverlayWeb"

const DialogOverlayNative = React.forwardRef<
  DialogPrimitive.OverlayRef,
  DialogPrimitive.OverlayProps
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      style={StyleSheet.absoluteFill}
      className={cn(
        "flex items-center justify-center bg-black/80 p-2",
        className
      )}
      {...props}
      ref={ref}
    >
      <Animated.View
        entering={FadeIn.duration(150)}
        exiting={FadeOut.duration(150)}
      >
        <>{children}</>
      </Animated.View>
    </DialogPrimitive.Overlay>
  )
})

DialogOverlayNative.displayName = "DialogOverlayNative"

const DialogOverlay = Platform.select({
  web: DialogOverlayWeb,
  default: DialogOverlayNative
})

const DialogContent = React.forwardRef<
  DialogPrimitive.ContentRef,
  DialogPrimitive.ContentProps & { portalHost?: string }
>(({ className, children, portalHost, ...props }, ref) => {
  // const { open } = DialogPrimitive.useRootContext()
  const { content, close } = dialogContentVariants()

  return (
    <DialogPortal hostName={portalHost}>
      <DialogOverlay>
        <DialogPrimitive.Content
          ref={ref}
          className={cn(content(), className)}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className={close()}>
            <LucideIcon icon={X} size={Platform.OS === "web" ? 16 : 18} />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: ViewProps) => (
  <View
    className={cn("flex flex-col gap-1.5 text-center sm:text-left", className)}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ className, ...props }: ViewProps) => (
  <View
    className={cn(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  DialogPrimitive.TitleRef,
  DialogPrimitive.TitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "native:text-xl text-foreground text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  DialogPrimitive.DescriptionRef,
  DialogPrimitive.DescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("native:text-base text-muted-foreground text-sm", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
}
