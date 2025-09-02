"use client"

import { VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"

import {
  UiToast,
  UiToastClose,
  UiToastDescription,
  UiToastProvider,
  UiToastTitle,
  UiToastViewport
} from "../UiToast"
import { toastWrapperStyles } from "./config"
import { useToast } from "./hooks/useToast"

interface ToasterProps
  extends ComponentProps<typeof UiToastProvider>,
    VariantProps<typeof toastWrapperStyles> {}

export function UiToaster({ variant, ...props }: ToasterProps) {
  const { toasts } = useToast()
  return (
    <UiToastProvider {...props} swipeDirection={"down"}>
      {toasts?.map(({ id, title, description, action, ...props }) => (
        <UiToast key={id} {...props}>
          <div className={toastWrapperStyles({ variant })}>
            {title && <UiToastTitle>{title}</UiToastTitle>}
            {description && (
              <UiToastDescription>{description}</UiToastDescription>
            )}
          </div>
          {action}
          <UiToastClose />
        </UiToast>
      ))}
      <UiToastViewport />
    </UiToastProvider>
  )
}
