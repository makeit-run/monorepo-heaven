"use client"

import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cn } from "@shared/utils/cn"
import { type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"
import { ReactNode } from "react"

import { textStyles } from "../UiText/config"
import { sheetVariants } from "./config"

const UiSheet = SheetPrimitive.Root
const UiSheetTrigger = SheetPrimitive.Trigger
const UiSheetClose = SheetPrimitive.Close
const UiSheetPortal = SheetPrimitive.Portal

const UiSheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50",
      className
    )}
    {...props}
    ref={ref}
  />
))
UiSheetOverlay.displayName = SheetPrimitive.Overlay.displayName

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  closeIcon?: ReactNode
}

const UiSheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    { closeIcon, side = "right", variant, className, children, ...props },
    ref
  ) => (
    <UiSheetPortal>
      <UiSheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side, variant }), className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="focus:ring-ring z-100 absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none data-[state=open]:bg-none">
          <div className={"text-gray-500"}>
            {closeIcon ? closeIcon : <X size={20} />}
          </div>
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </UiSheetPortal>
  )
)
UiSheetContent.displayName = SheetPrimitive.Content.displayName

const UiSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
UiSheetHeader.displayName = "SheetHeader"

const UiSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
UiSheetFooter.displayName = "SheetFooter"

const UiSheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={textStyles({ variant: "h4", className })}
    {...props}
  />
))
UiSheetTitle.displayName = SheetPrimitive.Title.displayName

const UiSheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={textStyles({
      variant: "body4",
      color: 600,
      className
    })}
    {...props}
  />
))
UiSheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  UiSheet,
  UiSheetPortal,
  UiSheetOverlay,
  UiSheetTrigger,
  UiSheetClose,
  UiSheetContent,
  UiSheetHeader,
  UiSheetFooter,
  UiSheetTitle,
  UiSheetDescription
}
