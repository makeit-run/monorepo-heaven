import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import { cardContentStyles, cardStyles, cardTitleStyles } from "./config"

export interface UiCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardStyles> {}

const UiCard = React.forwardRef<HTMLDivElement, UiCardProps>(
  ({ className, variant, border, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardStyles({ variant, border }), className)}
      {...props}
    />
  )
)
UiCard.displayName = "Card"

const UiCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col px-5 pb-4", className)}
    {...props}
  />
))
UiCardHeader.displayName = "CardHeader"

export interface UiCardTitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardTitleStyles> {}

const UiCardTitle = React.forwardRef<HTMLParagraphElement, UiCardTitleProps>(
  ({ className, variant, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        cardTitleStyles({ variant }),
        "font-semibold leading-normal tracking-tight",
        className
      )}
      {...props}
    />
  )
)
UiCardTitle.displayName = "CardTitle"

const UiCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-md text-text-650", className)} {...props} />
))
UiCardDescription.displayName = "CardDescription"

export interface UiCardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentStyles> {}

const UiCardContent = React.forwardRef<HTMLDivElement, UiCardContentProps>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardContentStyles({ padding }), className)}
      {...props}
    />
  )
)
UiCardContent.displayName = "CardContent"

const UiCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
UiCardFooter.displayName = "CardFooter"

export {
  UiCard,
  UiCardHeader,
  UiCardFooter,
  UiCardTitle,
  UiCardDescription,
  UiCardContent
}
