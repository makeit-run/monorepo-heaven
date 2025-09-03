'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import { tooltipContentVariants, tooltipArrowVariants } from './config';

// Create context for variant propagation
const TooltipContext = React.createContext<{
  variant?: string;
  arrowVariant?: string;
}>({ variant: 'default', arrowVariant: 'default' });

function UiTooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function UiTooltip({
  variant = 'default',
  arrowVariant = 'default',
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root> & {
  variant?: string;
  arrowVariant?: string;
}) {
  return (
    <UiTooltipProvider>
      <TooltipContext.Provider value={{ variant, arrowVariant }}>
        <TooltipPrimitive.Root data-slot="tooltip" {...props}>
          {children}
        </TooltipPrimitive.Root>
      </TooltipContext.Provider>
    </UiTooltipProvider>
  );
}

function UiTooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function UiTooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  const { variant, arrowVariant } = React.useContext(TooltipContext);
  
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(tooltipContentVariants({ variant: variant as any }), className)}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={cn(tooltipArrowVariants({ variant: arrowVariant as any }))} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { UiTooltip, UiTooltipTrigger, UiTooltipContent, UiTooltipProvider };
