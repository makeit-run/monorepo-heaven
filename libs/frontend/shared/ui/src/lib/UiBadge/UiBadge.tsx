import { cn } from "@shared/utils/cn"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"

import { badgeStyles } from "./config"

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeStyles> {}

function UiBadge({ color, className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeStyles({ color, variant, size }), className)}
      {...props}
    />
  )
}

export { UiBadge }
