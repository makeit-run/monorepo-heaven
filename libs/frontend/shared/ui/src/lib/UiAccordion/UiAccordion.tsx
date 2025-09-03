'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@shared/utils/cn';
import { type VariantProps } from 'class-variance-authority';
import {
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
  accordionContentInnerVariants,
  accordionIconVariants,
} from './config';

function UiAccordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

interface UiAccordionItemProps
  extends React.ComponentProps<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemVariants> {}

function UiAccordionItem({
  className,
  variant,
  ...props
}: UiAccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(accordionItemVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiAccordionTriggerProps
  extends React.ComponentProps<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {}

function UiAccordionTrigger({
  className,
  children,
  variant,
  ...props
}: UiAccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerVariants({ variant }), className)}
        {...props}
      >
        {children}
        <ChevronDownIcon className={accordionIconVariants({ variant })} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

interface UiAccordionContentProps
  extends React.ComponentProps<typeof AccordionPrimitive.Content>,
    VariantProps<typeof accordionContentVariants> {}

function UiAccordionContent({
  className,
  children,
  variant,
  ...props
}: UiAccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={accordionContentVariants({ variant })}
      {...props}
    >
      <div className={cn(accordionContentInnerVariants({ variant }), className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { UiAccordion, UiAccordionItem, UiAccordionTrigger, UiAccordionContent };
