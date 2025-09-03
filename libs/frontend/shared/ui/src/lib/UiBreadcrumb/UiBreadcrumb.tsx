import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@shared/utils/cn';
import { type VariantProps } from 'class-variance-authority';
import {
  breadcrumbListVariants,
  breadcrumbItemVariants,
  breadcrumbLinkVariants,
  breadcrumbPageVariants,
  breadcrumbSeparatorVariants,
  breadcrumbEllipsisVariants,
  breadcrumbEllipsisIconVariants,
} from './config';

function UiBreadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

interface UiBreadcrumbListProps
  extends React.ComponentProps<'ol'>,
    VariantProps<typeof breadcrumbListVariants> {}

function UiBreadcrumbList({
  className,
  variant,
  ...props
}: UiBreadcrumbListProps) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(breadcrumbListVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiBreadcrumbItemProps
  extends React.ComponentProps<'li'>,
    VariantProps<typeof breadcrumbItemVariants> {}

function UiBreadcrumbItem({
  className,
  variant,
  ...props
}: UiBreadcrumbItemProps) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn(breadcrumbItemVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiBreadcrumbLinkProps
  extends React.ComponentProps<'a'>,
    VariantProps<typeof breadcrumbLinkVariants> {
  asChild?: boolean;
}

function UiBreadcrumbLink({
  asChild,
  className,
  variant,
  ...props
}: UiBreadcrumbLinkProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(breadcrumbLinkVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiBreadcrumbPageProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof breadcrumbPageVariants> {}

function UiBreadcrumbPage({
  className,
  variant,
  ...props
}: UiBreadcrumbPageProps) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(breadcrumbPageVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiBreadcrumbSeparatorProps
  extends React.ComponentProps<'li'>,
    VariantProps<typeof breadcrumbSeparatorVariants> {}

function UiBreadcrumbSeparator({
  children,
  className,
  variant,
  ...props
}: UiBreadcrumbSeparatorProps) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn(breadcrumbSeparatorVariants({ variant }), className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

interface UiBreadcrumbEllipsisProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof breadcrumbEllipsisVariants> {}

function UiBreadcrumbEllipsis({
  className,
  variant,
  ...props
}: UiBreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(breadcrumbEllipsisVariants({ variant }), className)}
      {...props}
    >
      <MoreHorizontal className={breadcrumbEllipsisIconVariants({ variant })} />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  UiBreadcrumb,
  UiBreadcrumbList,
  UiBreadcrumbItem,
  UiBreadcrumbLink,
  UiBreadcrumbPage,
  UiBreadcrumbSeparator,
  UiBreadcrumbEllipsis,
};