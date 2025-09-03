'use client';

import * as React from 'react';

import { cn } from '@shared/utils/cn';
import {
  tableContainerVariants,
  tableVariants,
  tableHeaderVariants,
  tableBodyVariants,
  tableFooterVariants,
  tableRowVariants,
  tableHeadVariants,
  tableCellVariants,
  tableCaptionVariants,
} from './config';

function UiTable({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div
      data-slot="table-container"
      className={cn(tableContainerVariants({ variant: 'default' }))}
    >
      <table
        data-slot="table"
        className={cn(tableVariants({ variant: 'default' }), className)}
        {...props}
      />
    </div>
  );
}

function UiTableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn(tableHeaderVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiTableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(tableBodyVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiTableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(tableFooterVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiTableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(tableRowVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiTableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(tableHeadVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiTableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(tableCellVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

function UiTableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(tableCaptionVariants({ variant: 'default' }), className)}
      {...props}
    />
  );
}

export {
  UiTable,
  UiTableHeader,
  UiTableBody,
  UiTableFooter,
  UiTableHead,
  UiTableRow,
  UiTableCell,
  UiTableCaption,
};
