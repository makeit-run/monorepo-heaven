"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import type { VariantProps } from "class-variance-authority"
import { ChevronRight } from "lucide-react"
import * as React from "react"

import {
  accordionContentStyles,
  accordionTriggerIconStyles,
  accordionTriggerIconWrapperStyles,
  accordionTriggerStyles
} from "./config"
import { cn } from "@shared/utils/cn"

const UiAccordion = AccordionPrimitive.Root

const UiAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, ref) => <AccordionPrimitive.Item ref={ref} {...props} />)
UiAccordionItem.displayName = "AccordionItem"

interface UiAccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerStyles> {
  iconStyles?: VariantProps<typeof accordionTriggerStyles>
  customIcon?: React.ReactNode
}

const UiAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  UiAccordionTriggerProps
>(({ variant, iconStyles, customIcon, className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerStyles({ variant }), className)}
      {...props}
    >
      {children}
      {customIcon || (
        <div className={accordionTriggerIconWrapperStyles({ variant })}>
          <ChevronRight
            strokeWidth={2}
            className={accordionTriggerIconStyles({
              className: iconStyles,
              variant: variant
            })}
          />
        </div>
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
UiAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const UiAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> &
    VariantProps<typeof accordionTriggerStyles>
>(({ variant, className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(accordionContentStyles({ variant }), className)}
    {...props}
  >
    <div className={"m-3"}>{children}</div>
  </AccordionPrimitive.Content>
))
UiAccordionContent.displayName = AccordionPrimitive.Content.displayName

export { UiAccordion, UiAccordionItem, UiAccordionTrigger, UiAccordionContent }
