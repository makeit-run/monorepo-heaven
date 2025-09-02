"use client"

import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"
import { useId } from "react"

import { UiLabel } from "../UiLabel"
import { textareaStyles } from "./config"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaStyles> {
  label?: string
  error?: string
}

const UiTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, label, error, id, ...props }, ref) => {
    const reactId = useId()
    const idGenerated = id ? id : reactId

    return (
      <>
        {label && <UiLabel htmlFor={idGenerated}>{label}</UiLabel>}
        <textarea
          name={id}
          id={idGenerated}
          className={cn(
            textareaStyles({ variant }),
            { "border-red-500": error },
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="mt-[1.5] min-h-6 text-xs text-red-600">{error}</div>
      </>
    )
  }
)
UiTextarea.displayName = "UiTextarea"

export { UiTextarea }
