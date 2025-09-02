import { cn } from "@shared/utils/cn"
import type { VariantProps } from "class-variance-authority"
import React from "react"
import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field"

import { inputStyles } from "../UiTextInput/config"

export interface UiCurrencyInputProps
  extends Omit<CurrencyInputProps, "size" | "color">,
    VariantProps<typeof inputStyles> {
  error?: string
}

export const UiCurrencyInput = React.forwardRef<
  HTMLInputElement,
  UiCurrencyInputProps
>(
  (
    {
      color,
      size,
      className,
      error,
      placeholder = "$",
      prefix = "$",
      defaultValue,
      decimalScale = 2,
      decimalsLimit = 2,
      ...props
    },
    ref
  ) => {
    return (
      <CurrencyInput
        ref={ref}
        defaultValue={defaultValue}
        intlConfig={{ locale: "en-US" }}
        decimalsLimit={decimalsLimit}
        decimalScale={decimalScale}
        placeholder={placeholder}
        prefix={prefix}
        className={cn(
          "w-full",
          inputStyles({ size }),
          error && "border-red-500",
          className
        )}
        {...props}
      />
    )
  }
)

UiCurrencyInput.displayName = "CurrencyInput"
