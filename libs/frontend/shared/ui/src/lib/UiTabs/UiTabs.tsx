'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import {
  tabsVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
} from './config';

// Create context for variant propagation
const TabsContext = React.createContext<{
  variant?: string;
}>({ variant: 'default' });

function UiTabs({
  className,
  variant = 'default',
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & 
  VariantProps<typeof tabsVariants>) {
  return (
    <TabsContext.Provider value={{ variant }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn(tabsVariants({ variant }), className)}
        {...props}
      >
        {children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  );
}

function UiTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const { variant } = React.useContext(TabsContext);
  
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant: variant as any }), className)}
      {...props}
    />
  );
}

function UiTabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { variant } = React.useContext(TabsContext);
  
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant: variant as any }), className)}
      {...props}
    />
  );
}

function UiTabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  const { variant } = React.useContext(TabsContext);
  
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(tabsContentVariants({ variant: variant as any }), className)}
      {...props}
    />
  );
}

export { UiTabs, UiTabsList, UiTabsTrigger, UiTabsContent };
