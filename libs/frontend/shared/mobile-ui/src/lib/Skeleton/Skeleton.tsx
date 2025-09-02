import { cn } from "@shared/utils/cn"
import { View } from "react-native"
import { ViewComponent } from "react-native/Libraries/Components/View/View"
import type { VariantProps } from "tailwind-variants"

import { skeletonStyles } from "@frontend/shared/mobile-ui/Skeleton/config"

interface SkeletonProps
  extends React.ComponentProps<typeof ViewComponent>,
    VariantProps<typeof skeletonStyles> {}

export function Skeleton({ variant, className, ...rest }: SkeletonProps) {
  return (
    <View className={cn(skeletonStyles({ variant }), className)} {...rest} />
  )
}
