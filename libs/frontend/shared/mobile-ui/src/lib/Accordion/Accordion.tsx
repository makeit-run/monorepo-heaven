import React from 'react';
import { LucideIcon } from '../LucideIcon';
import { TextClassContext } from '../Text/Text';
import * as AccordionPrimitive from '../@Primitives/components/Accordion';
import { ChevronDown } from 'lucide-react-native';
import { Platform, Pressable, View } from 'react-native';
import Animated, {
  FadeOutUp,
  LayoutAnimationConfig,
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { cn } from '@shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import {
  accordionVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionTriggerTextVariants,
  accordionContentVariants,
  accordionContentInnerVariants,
  accordionChevronVariants,
} from './config';

// Create context for variant propagation
const AccordionContext = React.createContext<{
  variant?: VariantProps<typeof accordionVariants>['variant'];
}>({ variant: 'default' });

function Accordion({
  children,
  variant = 'default',
  ...props
}: Omit<AccordionPrimitive.RootProps, 'asChild'> &
  React.RefAttributes<AccordionPrimitive.RootRef> &
  VariantProps<typeof accordionVariants>) {
  return (
    <AccordionContext.Provider value={{ variant }}>
      <LayoutAnimationConfig skipEntering>
        <AccordionPrimitive.Root
          {...(props as AccordionPrimitive.RootProps)}
          asChild={Platform.OS !== 'web'}
        >
          <Animated.View
            className={cn(accordionVariants({ variant }))}
            layout={LinearTransition.duration(200)}
          >
            {children}
          </Animated.View>
        </AccordionPrimitive.Root>
      </LayoutAnimationConfig>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  children,
  className,
  value,
  ...props
}: AccordionPrimitive.ItemProps &
  React.RefAttributes<AccordionPrimitive.ItemRef>) {
  const { variant } = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Item
      className={cn(
        accordionItemVariants({ variant: variant as any }),
        Platform.select({ web: 'last:border-b-0' }),
        className
      )}
      value={value}
      asChild
      {...props}
    >
      <Animated.View
        className="native:overflow-hidden"
        layout={Platform.select({ native: LinearTransition.duration(200) })}
      >
        {children}
      </Animated.View>
    </AccordionPrimitive.Item>
  );
}

const Trigger = Platform.OS === 'web' ? View : Pressable;

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.TriggerProps & {
  children?: React.ReactNode;
} & React.RefAttributes<AccordionPrimitive.TriggerRef>) {
  const { variant } = React.useContext(AccordionContext);
  const { isExpanded } = AccordionPrimitive.useItemContext();

  const progress = useDerivedValue(
    () =>
      isExpanded
        ? withTiming(1, { duration: 250 })
        : withTiming(0, { duration: 200 }),
    [isExpanded]
  );
  const chevronStyle = useAnimatedStyle(
    () => ({
      transform: [{ rotate: `${progress.value * 180}deg` }],
    }),
    [progress]
  );

  return (
    <TextClassContext.Provider
      value={cn(
        accordionTriggerTextVariants({ variant: variant as any }),
        Platform.select({ web: 'group-hover:underline' })
      )}
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger {...props} asChild>
          <Trigger
            className={cn(
              accordionTriggerVariants({ variant: variant as any }),
              Platform.select({
                web: 'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 outline-none transition-all hover:underline focus-visible:ring-[3px] disabled:pointer-events-none [&[data-state=open]>svg]:rotate-180',
              }),
              className
            )}
          >
            <>{children}</>
            <Animated.View style={chevronStyle}>
              <LucideIcon
                icon={ChevronDown}
                className={cn(
                  accordionChevronVariants({ variant: variant as any })
                )}
              />
            </Animated.View>
          </Trigger>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    </TextClassContext.Provider>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.ContentProps &
  React.RefAttributes<AccordionPrimitive.ContentRef>) {
  const { variant } = React.useContext(AccordionContext);
  const { isExpanded } = AccordionPrimitive.useItemContext();

  return (
    <TextClassContext.Provider value="text-sm">
      <AccordionPrimitive.Content
        className={cn(
          accordionContentVariants({ variant: variant as any }),
          Platform.select({
            web: isExpanded ? 'animate-accordion-down' : 'animate-accordion-up',
          })
        )}
        {...props}
      >
        <Animated.View
          exiting={Platform.select({ native: FadeOutUp.duration(200) })}
          className={cn(
            accordionContentInnerVariants({ variant: variant as any }),
            className
          )}
        >
          {children}
        </Animated.View>
      </AccordionPrimitive.Content>
    </TextClassContext.Provider>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
