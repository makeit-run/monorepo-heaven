import { cn } from '@shared/utils/cn';
import * as React from 'react';
import { VariantProps } from 'tailwind-variants';



import * as TabsPrimitive from '../@Primitives/components/Tabs';
import { TextClassContext } from "../Text/Text";
import {
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsVariants
} from "./config"


type TabsProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  className?: string
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, ...props }, ref) => {
  return <TabsPrimitive.Root ref={ref} className={cn(className)} {...props} />
})

Tabs.displayName = "Tabs"

type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsVariants> & {
  className?: string
}


const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(
  ({ className, variant, size, color, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabsListVariants({ variant, size, color }), className)}
      {...props}
    />
  )
);
TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> &
  VariantProps<typeof tabsVariants> & {
    className?: string
  }


const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(
  ({ className, variant, size, color, ...props }, ref) => {
    const { value } = TabsPrimitive.useRootContext();
    const isActive = props.value === value;

    return (
      <TextClassContext.Provider value={cn('font-medium')}>
        <TabsPrimitive.Trigger
          ref={ref}
          className={cn(
            tabsTriggerVariants({
              variant,
              size,
              color,
              active: isActive
            }),
            props.disabled && 'opacity-50',
            className
          )}
          {...props}
        />
      </TextClassContext.Provider>
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

type TabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
> &
  VariantProps<typeof tabsVariants> & {
    className?: string
  }


const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(
  ({ className, variant, size, color, ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(tabsContentVariants({ variant, size, color }), className)}
      {...props}
    />
  )
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
