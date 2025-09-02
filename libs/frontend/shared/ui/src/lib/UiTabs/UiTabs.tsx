"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import { tabsContentStyles, tabsListStyles, tabsTriggerStyles } from "./config"

const UiTabs = TabsPrimitive.Root

const UiTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof tabsListStyles>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListStyles({ variant }), className)}
    {...props}
  />
))
UiTabsList.displayName = TabsPrimitive.List.displayName

const UiTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof tabsTriggerStyles>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerStyles({ variant }), className)}
    {...props}
  />
))
UiTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const UiTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> &
    VariantProps<typeof tabsContentStyles>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentStyles({ variant }), className)}
    {...props}
  />
))
UiTabsContent.displayName = TabsPrimitive.Content.displayName

export { UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent }
