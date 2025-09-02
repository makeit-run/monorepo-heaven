import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"
import { HTMLAttributes } from "react"

import {
  paginationContentStyles,
  paginationEllipsisStyles,
  paginationLinkStyles,
  paginationStyles
} from "./config"

interface UiPaginationProps
  extends React.ComponentProps<"nav">,
    VariantProps<typeof paginationStyles> {}

const UiPagination = ({ className, variant, ...props }: UiPaginationProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(paginationStyles({ variant }), className)}
    {...props}
  />
)

const UiPaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul"> & VariantProps<typeof paginationContentStyles>
>(({ className, variant, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(paginationContentStyles({ variant }), className)}
    {...props}
  />
))
UiPaginationContent.displayName = "UiPaginationContent"

const UiPaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} {...props} className={className} />
))
UiPaginationItem.displayName = "UiPaginationItem"

interface PaginationLinkProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof paginationLinkStyles> {
  text?: string
  isActive?: boolean
  disabled?: boolean
}

const UiPaginationLink = ({
  className,
  isActive,
  size = "small",
  color,
  variant,
  ...props
}: PaginationLinkProps) => (
  <UiPaginationItem className={"h-full hover:cursor-pointer"}>
    <button
      aria-current={isActive ? "page" : undefined}
      className={cn(
        paginationLinkStyles({
          variant,
          size,
          color
        }),
        "h-full hover:!cursor-pointer",
        { active: isActive },
        className
      )}
      {...props}
    />
  </UiPaginationItem>
)
UiPaginationLink.displayName = "UiPaginationLink"

const UiPaginationPrevious = ({
  text = "Previous",
  ...props
}: PaginationLinkProps) => (
  <UiPaginationLink
    className={cn("hover:cursor-pointer", props.className)}
    aria-label="Go to previous page"
    {...props}
  >
    <ChevronLeft className="size-4" />
    <span className={"max-md:hidden"}>{text}</span>
  </UiPaginationLink>
)
UiPaginationPrevious.displayName = "UiPaginationPrevious"

const UiPaginationNext = ({ text = "Next", ...props }: PaginationLinkProps) => (
  <UiPaginationLink
    className={cn("hover:cursor-pointer", props.className)}
    aria-label="Go to next page"
    {...props}
  >
    <span className={"max-md:hidden"}>{text}</span>
    <ChevronRight className="size-4" />
  </UiPaginationLink>
)

interface UiPaginationEllipsisProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof paginationEllipsisStyles> {
  text?: string
}

const UiPaginationEllipsis = ({
  className,
  variant,
  text = "More pages",
  ...props
}: UiPaginationEllipsisProps) => (
  <span
    aria-hidden
    className={cn(paginationEllipsisStyles({ variant }), className)}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">{text}</span>
  </span>
)

export {
  UiPagination,
  UiPaginationContent,
  UiPaginationEllipsis,
  UiPaginationItem,
  UiPaginationLink,
  UiPaginationNext,
  UiPaginationPrevious
}
