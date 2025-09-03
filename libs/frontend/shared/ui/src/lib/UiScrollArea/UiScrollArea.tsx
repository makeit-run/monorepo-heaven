'use client';

import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@shared/utils/cn';
import {
  scrollAreaVariants,
  scrollAreaViewportVariants,
  scrollBarVariants,
  scrollAreaThumbVariants,
} from './config';

function UiScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn(scrollAreaVariants({ variant: 'default' }), className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={cn(scrollAreaViewportVariants({ variant: 'default' }))}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <UiScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function UiScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(scrollBarVariants({ orientation }), className)}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className={cn(scrollAreaThumbVariants({ variant: 'default' }))}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { UiScrollArea, UiScrollBar };
