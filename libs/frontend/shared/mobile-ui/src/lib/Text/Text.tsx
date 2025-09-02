import { cn } from "@shared/utils/cn"
import * as React from "react"
import { Text as RNText } from "react-native"
import type { VariantProps } from "tailwind-variants"

import * as Slot from "../@Primitives/components/Slot"
import type { SlottableTextProps, TextRef } from "../@Primitives/types"
import { textVariants } from "./config"

const TextClassContext = React.createContext<string | undefined>(undefined)

interface TextProps
  extends SlottableTextProps,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<TextRef, TextProps>(
  (
    { className, variant, color, balance, weight, asChild = false, ...props },
    ref
  ) => {
    const textClass = React.useContext(TextClassContext)
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        className={cn(
          textClass,
          textVariants({ color, balance, weight, variant }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text, TextClassContext }
