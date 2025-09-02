import { cn } from "@shared/utils/cn"
import * as React from "react"
import { ReactElement } from "react"
import { ActivityIndicator, Pressable, View } from "react-native"
import { type VariantProps } from "tailwind-variants"

import { Text, TextClassContext } from "../Text"
import { buttonTextVariants, buttonVariants } from "./config"

// Icon can either be a ReactElement or a component that takes className
type IconType = ReactElement | React.ComponentType<{ className?: string }>

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    className?: string
    icon?: IconType
    iconPosition?: "left" | "right"
    iconClassName?: string
    loading?: boolean
  }

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      rounded,
      children,
      icon,
      iconPosition = "left",
      iconClassName,
      loading,
      paddingX,
      paddingY,
      ...props
    },
    ref
  ) => {
    const textClass = buttonTextVariants({
      variant,
      size
    })

    // Render icon based on its type
    const renderIcon = () => {
      if (!icon) return null

      if (React.isValidElement(icon)) {
        return icon
      }

      // Component type icon (like LucideIcon)
      const IconComponent = icon as React.ComponentType<{ className?: string }>
      return <IconComponent className={iconClassName} />
    }

    const renderContent = () => {
      if (loading) {
        return (
          <View className="flex flex-row items-center justify-center">
            <ActivityIndicator
              size="small"
              color={variant === "outline" ? "#6366F1" : "#FFFFFF"}
            />
          </View>
        )
      }
      if (!icon) {
        return typeof children === "string" ? (
          <Text className={textClass}>{children}</Text>
        ) : (
          children
        )
      }

      const isIconsSize = size && ["icon", "iconSmall"]?.includes(size)
      const IconElement = renderIcon()

      return (
        <View
          className={cn(
            "flex flex-row items-center justify-center gap-1.5",
            iconPosition === "right" && "flex-row-reverse"
          )}
        >
          {IconElement && (
            <View className={cn(!isIconsSize && "mr-2")}>{IconElement}</View>
          )}

          {typeof children === "string" ? (
            <Text className={textClass}>{children}</Text>
          ) : (
            <>{children}</>
          )}
        </View>
      )
    }

    return (
      <TextClassContext.Provider value={textClass}>
        <Pressable
          className={buttonVariants({
            variant,
            paddingX,
            paddingY,
            rounded,
            size,
            className
          })}
          ref={ref}
          role="button"
          {...props}
        >
          {renderContent()}
        </Pressable>
      </TextClassContext.Provider>
    )
  }
)

Button.displayName = "Button"

export { Button }
export type { ButtonProps }
