import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import React from "react"

import { UiText } from "../UiText"
import { separatorStyles } from "./config"

interface SidebarSeparatorProps extends VariantProps<typeof separatorStyles> {
  text?: string
  orientation?: "horizontal" | "vertical"
  className?: string
}

export function UiSeparator({
  variant,
  className,
  text
}: SidebarSeparatorProps) {
  return (
    <div className={cn(separatorStyles({ variant }), className)}>
      {text && (
        <UiText className={"bg-primary/30 pr-1"} variant={"body4-medium"}>
          {text}
        </UiText>
      )}
    </div>
  )
}

export default UiSeparator
