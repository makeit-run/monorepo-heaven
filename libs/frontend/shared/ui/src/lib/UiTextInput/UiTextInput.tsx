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
import {
  inputStyles,
  labelStyles,
  textInputWrapperVariants,
  textInputContainerVariants,
  textInputIconVariants,
  textInputErrorVariants,
} from "./config"

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color">,
    VariantProps<typeof inputStyles>,
    VariantProps<typeof textInputWrapperVariants>,
    VariantProps<typeof textInputContainerVariants>,
    VariantProps<typeof textInputIconVariants>,
    VariantProps<typeof textInputErrorVariants> {
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
  wrapperVariant?: VariantProps<typeof textInputWrapperVariants>['variant']
  containerVariant?: VariantProps<typeof textInputContainerVariants>['variant']
  iconVariant?: VariantProps<typeof textInputIconVariants>['variant']
  errorVariant?: VariantProps<typeof textInputErrorVariants>['variant']
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
      variant = 'default',
      size = 'default',
      color = 'default',
      id,
      labelProps,
      error,
      iconPosition,
      wrapperClassName,
      wrapperVariant = 'default',
      containerVariant = 'default',
      iconVariant = 'default',
      errorVariant = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          textInputWrapperVariants({ variant: wrapperVariant }),
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
            textInputContainerVariants({ variant: containerVariant }),
            iconPosition === "right" && "flex-row-reverse"
          )}
        >
          <input
            id={id}
            autoComplete={autoComplete}
            autoCapitalize="none"
            className={cn(
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
              textInputIconVariants({ variant: iconVariant }),
              iconPosition === "right" && "right-0.5 -translate-x-1/2"
            )}
          >
            {icon}
          </div>
        </div>
        {error && <p className={cn(textInputErrorVariants({ variant: errorVariant }))}>{error}</p>}
      </div>
    )
  }
)

UiTextInput.displayName = "Input"
