import * as React from 'react';
import { cn } from '@shared/utils/cn';
import { type VariantProps } from 'class-variance-authority';
import {
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
  cardActionVariants,
  cardContentVariants,
  cardFooterVariants,
} from './config';

export interface UiCardProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardVariants> {}

function UiCard({ className, variant, ...props }: UiCardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCardHeaderProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardHeaderVariants> {}

function UiCardHeader({ className, variant, ...props }: UiCardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(cardHeaderVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCardTitleProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardTitleVariants> {}

function UiCardTitle({ className, variant, ...props }: UiCardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn(cardTitleVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCardDescriptionProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardDescriptionVariants> {}

function UiCardDescription({
  className,
  variant,
  ...props
}: UiCardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={cn(cardDescriptionVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCardActionProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardActionVariants> {}

function UiCardAction({ className, variant, ...props }: UiCardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={cn(cardActionVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCardContentProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardContentVariants> {}

function UiCardContent({ className, variant, ...props }: UiCardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn(cardContentVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface UiCardFooterProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardFooterVariants> {}

function UiCardFooter({ className, variant, ...props }: UiCardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn(cardFooterVariants({ variant }), className)}
      {...props}
    />
  );
}

export {
  UiCard,
  UiCardHeader,
  UiCardFooter,
  UiCardTitle,
  UiCardAction,
  UiCardDescription,
  UiCardContent,
};