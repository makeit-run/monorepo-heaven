import { Slot } from "@radix-ui/react-slot"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { breadcrumbStyles } from "./config"

const UiBreadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
UiBreadcrumb.displayName = "UiBreadcrumb"

const UiBreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
      className
    )}
    {...props}
  />
))
UiBreadcrumbList.displayName = "UiBreadcrumbList"

interface UiBreadcrumbItemProps
  extends VariantProps<typeof breadcrumbStyles>,
    Omit<React.ComponentPropsWithoutRef<"li">, "variant" | "color"> {}
const UiBreadcrumbItem = React.forwardRef<HTMLLIElement, UiBreadcrumbItemProps>(
  ({ className, variant, color, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(breadcrumbStyles({ variant, color }), className)}
      {...props}
    />
  )
)
UiBreadcrumbItem.displayName = "UiBreadcrumbItem"

export interface UiBreadcrumbLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  asChild?: boolean
}
const UiBreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  UiBreadcrumbLinkProps
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : Link

  return (
    <Comp
      ref={ref}
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
})
UiBreadcrumbLink.displayName = "UiBreadcrumbLink"

const UiBreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("text-foreground font-normal", className)}
    {...props}
  />
))
UiBreadcrumbPage.displayName = "UiBreadcrumbPage"

const UiBreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
UiBreadcrumbSeparator.displayName = "UiBreadcrumbSeparator"

const UiBreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex size-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More</span>
  </span>
)
UiBreadcrumbEllipsis.displayName = "UiBreadcrumbElipssis"

export {
  UiBreadcrumb,
  UiBreadcrumbList,
  UiBreadcrumbItem,
  UiBreadcrumbLink,
  UiBreadcrumbPage,
  UiBreadcrumbSeparator,
  UiBreadcrumbEllipsis
}
