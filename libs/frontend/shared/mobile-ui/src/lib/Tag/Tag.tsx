import { cn } from "@shared/utils/cn"
import { XIcon } from "lucide-react-native"
import { Pressable, View } from "react-native"
import { type VariantProps } from "tailwind-variants"

import { LucideIcon } from "@frontend/shared/mobile-ui/LucideIcon"

import * as Slot from "../@Primitives/components/Slot"
import { SlottableViewProps } from "../@Primitives/types"
import { Text, TextClassContext } from "../Text"
import { tagTextVariants, tagVariants } from "./config"

type TagProps = SlottableViewProps &
  VariantProps<typeof tagVariants> & {
    className?: string
    onAction?: () => void
  }

function Tag({
  className,
  children,
  variant,
  size,
  asChild,
  onAction,
  position,
  rounded,
  ...props
}: TagProps) {
  const Component = asChild
    ? Slot.View
    : variant === "action"
      ? Pressable
      : View

  const content = (
    <>
      <Text className={tagTextVariants({ variant, size })}>{children}</Text>
      {variant === "action" && (
        <View className="bg-destructive flex size-5 items-center justify-center rounded-full">
          <LucideIcon className={"text-tertiary-300 size-4"} icon={XIcon} />
        </View>
      )}
    </>
  )

  return (
    <TextClassContext.Provider value={tagTextVariants({ variant, size })}>
      <Component
        className={cn(
          tagVariants({ variant, size, position, rounded }),
          className
        )}
        onPress={variant === "action" ? onAction : undefined}
        {...props}
      >
        {content}
      </Component>
    </TextClassContext.Provider>
  )
}

export { Tag, tagTextVariants, tagVariants }
export type { TagProps }
