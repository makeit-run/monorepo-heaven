import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import React from "react"

import { skeletonStyles } from "./config"

interface UiSkeletonProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof skeletonStyles> {}

function UiSkeleton({ className, variant, ...props }: UiSkeletonProps) {
  return (
    <div className={cn(skeletonStyles({ variant }), className)} {...props} />
  )
}

interface SkeletonInputProps {
  label?: string
  wrapperClassName?: string
  labelClassName?: string
  skeletonClassName?: string
}

const UiSkeletonInput = ({
  label,
  skeletonClassName,
  labelClassName,
  wrapperClassName
}: SkeletonInputProps) => {
  return (
    <div className={cn("w-full", wrapperClassName)}>
      {label && (
        <label
          className={cn(
            "inline-block pb-2.5 text-sm font-medium text-gray-500",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <UiSkeleton className={cn("h-16 w-full", skeletonClassName)} />
    </div>
  )
}

export { UiSkeleton, UiSkeletonInput }
