import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes
} from "react"
import * as React from "react"

import { UiLabel } from "../UiLabel"
import { inputStyles, labelStyles } from "./config"

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color">,
    VariantProps<typeof inputStyles> {
  label?: string
  labelProps?: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
  error?: string
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  wrapperClassName?: string
}

export const UiTextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      type = "text",
      fullWidth = true,
      label,
      icon,
      autoComplete,
      variant,
      size,
      color,
      id,
      labelProps,
      error,
      iconPosition,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "font-roboto inline-block text-left",
          fullWidth ? "w-full" : "w-auto",
          wrapperClassName
        )}
      >
        {!label && (
          <UiLabel className="sr-only" htmlFor={id}>
            {id}
          </UiLabel>
        )}
        {label && (
          <label
            htmlFor={id}
            className={cn(labelStyles({}), labelProps?.className)}
            {...labelProps}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "relative flex flex-row items-center",
            iconPosition === "right" && "flex-row-reverse"
          )}
        >
          <input
            id={id}
            autoComplete={autoComplete}
            autoCapitalize="none"
            className={cn(
              "w-full",
              inputStyles({ size, variant, color }),
              error && "border-red-500",
              icon && (iconPosition === "right" ? "pr-15" : "pl-15"),
              className
            )}
            ref={ref}
            type={type}
            {...props}
          />
          <div
            className={cn(
              "absolute left-0.5 top-1/2 flex -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center text-inherit transition-all duration-500",
              iconPosition === "right" && "right-0.5 -translate-x-1/2"
            )}
          >
            {icon}
          </div>
        </div>
        {error && <p className="px-1 pt-1.5 text-xs text-red-600">{error}</p>}
      </div>
    )
  }
)

UiTextInput.displayName = "Input"
