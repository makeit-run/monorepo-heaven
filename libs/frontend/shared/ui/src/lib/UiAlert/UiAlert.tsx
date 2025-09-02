import { cn } from "@shared/utils/cn"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"

import { alertStyles } from "./config"

const UiAlert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertStyles>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertStyles({ variant }), className)}
    {...props}
  />
))
UiAlert.displayName = "UiAlert"

const UiAlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
UiAlertTitle.displayName = "UiAlertTitle"

const UiAlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
UiAlertDescription.displayName = "UiAlertDescription"

export { UiAlert, UiAlertTitle, UiAlertDescription }
