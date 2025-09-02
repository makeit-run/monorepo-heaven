import { cn } from "@shared/utils/cn"
import { type VariantProps } from "class-variance-authority"
import React from "react"

import { textStyles } from "./config"

export interface UiTextProps
  extends Omit<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
      >,
      "color"
    >,
    VariantProps<typeof textStyles> {
  link?: boolean
}

export const UiText = ({
  variant,
  children,
  color,
  className,
  weight,
  link,
  ...props
}: UiTextProps) => {
  return (
    <span
      className={cn(
        textStyles({ variant, color, weight }),
        link && "cursor-pointer hover:opacity-80",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
