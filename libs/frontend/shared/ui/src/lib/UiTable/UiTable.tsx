import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import {
  tableBodyStyles,
  tableCaptionStyles,
  tableCellStyles,
  tableFooterStyles,
  tableHeaderStyles,
  tableHeadStyles,
  tableRowStyles,
  tableStyles
} from "./config"

const UiTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & VariantProps<typeof tableStyles>
>(({ className, variant, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(tableStyles({ variant }), className)}
      {...props}
    />
  </div>
))
UiTable.displayName = "Table"

const UiTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> &
    VariantProps<typeof tableHeaderStyles>
>(({ className, variant, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(tableHeaderStyles({ variant }), className)}
    {...props}
  />
))
UiTableHeader.displayName = "TableHeader"

const UiTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> &
    VariantProps<typeof tableBodyStyles>
>(({ className, variant, ...props }, ref) => (
  <tbody
    ref={ref}
    className={tableBodyStyles({ className, variant })}
    {...props}
  />
))
UiTableBody.displayName = "TableBody"

const UiTableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> &
    VariantProps<typeof tableFooterStyles>
>(({ className, variant, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(tableFooterStyles({ variant }), className)}
    {...props}
  />
))
UiTableFooter.displayName = "TableFooter"

const UiTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> &
    VariantProps<typeof tableRowStyles>
>(({ className, variant, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(tableRowStyles({ variant }), className)}
    {...props}
  />
))
UiTableRow.displayName = "TableRow"

const UiTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={cn(tableHeadStyles(), className)} {...props} />
))
UiTableHead.displayName = "TableHead"

const UiTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> &
    VariantProps<typeof tableCellStyles>
>(({ className, variant, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(tableCellStyles({ variant }), className)}
    {...props}
  />
))
UiTableCell.displayName = "TableCell"

const UiTableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> &
    VariantProps<typeof tableCaptionStyles>
>(({ className, variant, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(tableCaptionStyles({ variant }), className)}
    {...props}
  />
))
UiTableCaption.displayName = "TableCaption"

export {
  UiTable,
  UiTableHeader,
  UiTableBody,
  UiTableFooter,
  UiTableHead,
  UiTableRow,
  UiTableCell,
  UiTableCaption
}
