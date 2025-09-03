import { cn } from "@shared/utils/cn"
import { ChevronDown } from "lucide-react-native"
import * as React from "react"
import { Platform, Pressable, View } from "react-native"
import Animated, {
  Extrapolation,
  FadeIn,
  FadeOutUp,
  interpolate,
  LayoutAnimationConfig,
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from "react-native-reanimated"
import { type VariantProps } from "tailwind-variants"

import * as AccordionPrimitive from "../@Primitives/components/Accordion"
import { LucideIcon } from "../LucideIcon"
import { Text, TextClassContext } from "../Text"
import {
  accordionContentTextVariants,
  accordionContentVariants,
  accordionItemVariants,
  accordionTriggerTextVariants,
  accordionTriggerVariants,
  accordionVariants
} from "./config"

export type AccordionVariantContextType = {
  size?: VariantProps<typeof accordionVariants>["size"]
  color?: VariantProps<typeof accordionVariants>["color"]
}

export const AccordionVariantContext =
  React.createContext<AccordionVariantContextType>({})

const Accordion = React.forwardRef<
  AccordionPrimitive.RootRef,
  AccordionPrimitive.RootProps & AccordionVariantContextType
>(({ children, size, color, ...props }, ref) => {
  return (
    <AccordionVariantContext.Provider value={{ size, color }}>
      <LayoutAnimationConfig skipEntering>
        <AccordionPrimitive.Root
          ref={ref}
          {...props}
          asChild={Platform.OS !== "web"}
        >
          <Animated.View layout={LinearTransition.duration(200)}>
            {children}
          </Animated.View>
        </AccordionPrimitive.Root>
      </LayoutAnimationConfig>
    </AccordionVariantContext.Provider>
  )
})
Accordion.displayName = AccordionPrimitive.Root.displayName

const AccordionItem = React.forwardRef<
  AccordionPrimitive.ItemRef,
  AccordionPrimitive.ItemProps
>(({ className, value, ...props }, ref) => {
  const { size, color } = React.useContext(AccordionVariantContext)
  return (
    <Animated.View
      className={"overflow-hidden"}
      layout={LinearTransition.duration(200)}
    >
      <AccordionPrimitive.Item
        ref={ref}
        className={cn(accordionItemVariants({ size, color }), className)}
        value={value}
        {...props}
      />
    </Animated.View>
  )
})
AccordionItem.displayName = AccordionPrimitive.Item.displayName

const Trigger = Platform.OS === "web" ? View : Pressable

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>

const AccordionTrigger = React.forwardRef<
  AccordionPrimitive.TriggerRef,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => {
  const { isExpanded } = AccordionPrimitive.useItemContext()
  const progress = useDerivedValue(() =>
    isExpanded
      ? withTiming(1, { duration: 250 })
      : withTiming(0, { duration: 200 })
  )
  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 180}deg` }],
    opacity: interpolate(progress.value, [0, 1], [1, 0.8], Extrapolation.CLAMP)
  }))

  const { size, color } = React.useContext(AccordionVariantContext)

  return (
    <TextClassContext.Provider value="native:text-lg font-medium">
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger ref={ref} {...props} asChild>
          <Trigger
            className={cn(accordionTriggerVariants({ size, color }), className)}
          >
            {typeof children === "string" ? (
              <Text
                className={cn(
                  accordionTriggerTextVariants({ size, color }),
                  className
                )}
              >
                {children}
              </Text>
            ) : (
              <>{children}</>
            )}
            <Animated.View style={chevronStyle}>
              <LucideIcon
                icon={ChevronDown}
                className={"text-primary size-[20px] shrink-0"}
              />
            </Animated.View>
          </Trigger>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    </TextClassContext.Provider>
  )
})

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>

const AccordionContent = React.forwardRef<
  AccordionPrimitive.ContentRef,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  const { isExpanded } = AccordionPrimitive.useItemContext()
  const { size, color } = React.useContext(AccordionVariantContext)
  return (
    <TextClassContext.Provider value="native:text-lg">
      <AccordionPrimitive.Content
        ref={ref}
        className={cn(accordionContentVariants({ size, color }))}
        {...props}
      >
        <InnerContent className={cn("pb-4", className)}>
          {typeof children === "string" ? (
            <Text
              className={cn(
                accordionContentTextVariants({ size, color }),
                className
              )}
            >
              {children}
            </Text>
          ) : (
            <>{children}</>
          )}
        </InnerContent>
      </AccordionPrimitive.Content>
    </TextClassContext.Provider>
  )
})

function InnerContent({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  if (Platform.OS === "web") {
    return <View className={cn("pb-4", className)}>{children}</View>
  }
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOutUp.duration(200)}
      className={cn("pb-4", className)}
    >
      {children}
    </Animated.View>
  )
}

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
