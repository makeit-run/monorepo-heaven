import { Slot } from "@radix-ui/react-slot"
import { cn } from "@shared/utils/cn"
import { Loader2 } from "lucide-react"
import React from "react"

import { buttonLoaderStyles, buttonStyles, ButtonVariantProps } from "./config"

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariantProps {
  asChild?: boolean
  loading?: boolean
}

const UiButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      weight,
      variant,
      hover,
      textColor,
      padding,
      color,
      size,
      asChild = false,
      disabled,
      children,
      wrapping,
      radius,
      loading,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const paddingComputed = padding || (size as ButtonVariantProps["padding"])
    return (
      <Comp
        className={cn(
          buttonStyles({
            variant,
            wrapping,
            size,
            radius,
            color,
            weight,
            textColor,
            padding: paddingComputed,
            hover
          }),
          className
        )}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading && variant !== "text" && (
          <Loader2 className={buttonLoaderStyles()} />
        )}

        {children}
      </Comp>
    )
  }
)
UiButton.displayName = "Button"

export { UiButton, buttonStyles }
