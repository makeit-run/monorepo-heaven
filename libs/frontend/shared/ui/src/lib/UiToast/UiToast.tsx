"use client"

import * as ToastPrimitives from "@radix-ui/react-toast"
import { cn } from "@shared/utils/cn"
import { type VariantProps } from "class-variance-authority"
import { BadgeAlert, BadgeCheck, BadgeInfo, Building, X } from "lucide-react"
import * as React from "react"

import {
  toastActionStyles,
  toastCloseStyles,
  toastDescriptionStyles,
  toastStyles,
  toastTitleStyles,
  toastViewportStyles
} from "./config"

export const getToastIcon = (
  variant: VariantProps<typeof toastStyles>["variant"]
) => {
  switch (variant) {
    case "info":
      return <BadgeInfo />
    case "success":
      return <BadgeCheck />
    case "destructive":
      return <BadgeAlert />
    default:
      return <BadgeInfo />
  }
}

export const UiToastProvider = ToastPrimitives.Provider

export const UiToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> &
    VariantProps<typeof toastViewportStyles>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(toastViewportStyles({ variant }), className)}
    {...props}
  />
))
UiToastViewport.displayName = ToastPrimitives.Viewport.displayName

export const UiToast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastStyles>
>(({ className, variant, color, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastStyles({ variant }), className)}
      {...props}
    >
      <div className={"flex w-full items-center justify-between"}>
        {props.children}
        {getToastIcon(variant)}
      </div>
    </ToastPrimitives.Root>
  )
})
UiToast.displayName = ToastPrimitives.Root.displayName

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> &
    VariantProps<typeof toastActionStyles>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(toastActionStyles({ variant }), className)}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

export const UiToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> &
    VariantProps<typeof toastCloseStyles>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(toastCloseStyles({ variant }), className)}
    toast-close=""
    {...props}
  >
    <X className="size-5" />
  </ToastPrimitives.Close>
))
UiToastClose.displayName = ToastPrimitives.Close.displayName

export const UiToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> &
    VariantProps<typeof toastTitleStyles>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(toastTitleStyles({ variant }), className)}
    {...props}
  />
))
UiToastTitle.displayName = ToastPrimitives.Title.displayName

export const UiToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> &
    VariantProps<typeof toastDescriptionStyles>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn(toastDescriptionStyles({ variant }), className)}
    {...props}
  />
))
UiToastDescription.displayName = ToastPrimitives.Description.displayName

export type ToastProps = React.ComponentPropsWithoutRef<typeof UiToast>

export type ToastActionElement = React.ReactElement<typeof ToastAction>
