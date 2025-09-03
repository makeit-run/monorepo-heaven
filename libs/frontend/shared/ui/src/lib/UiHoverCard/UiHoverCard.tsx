'use client';

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import { hoverCardContentVariants } from './config';

function UiHoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function UiHoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

export interface UiHoverCardContentProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Content>,
    VariantProps<typeof hoverCardContentVariants> {}

function UiHoverCardContent({
  className,
  variant,
  align = 'center',
  sideOffset = 4,
  ...props
}: UiHoverCardContentProps) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(hoverCardContentVariants({ variant }), className)}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

export { UiHoverCard, UiHoverCardTrigger, UiHoverCardContent };
