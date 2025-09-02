"use client"

import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { ComponentProps, FC, ReactNode, useEffect } from "react"

import {
  UiDialog,
  UiDialogClose,
  UiDialogContent,
  UiDialogDescription,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger
} from "../UiDialog"
import { UiScrollArea } from "../UiScrollArea"
import { modalCloseStyles, modalStyles } from "./config"

export type ModalScrollType = "behavior" | "container"

const UiModalClose = UiDialogClose

export interface UiModalProps
  extends VariantProps<typeof modalStyles>,
    ComponentProps<typeof UiDialogContent> {
  children?: ReactNode
  header?: ReactNode
  trigger?: ReactNode
  triggerProps?: ComponentProps<typeof UiDialogTrigger>
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  scrollType?: ModalScrollType
  pointerDownOutsideClose?: boolean
  closeStyles?: VariantProps<typeof modalCloseStyles>
}

const UiModal: FC<UiModalProps> = ({
  variant,
  children,
  header,
  open,
  defaultOpen,
  trigger,
  triggerProps,
  onOpenChange,
  className,
  closeStyles,
  scrollType = "behavior",
  withCloseBtn = true,
  pointerDownOutsideClose = false,
  ...rest
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.pointerEvents = "all"
    }
  }, [open])

  const onPointerDownOutside = (
    e: CustomEvent<{ originalEvent: PointerEvent }>
  ) => {
    if (!pointerDownOutsideClose) {
      e?.preventDefault()
    }
  }

  return (
    <UiDialog defaultOpen={defaultOpen} onOpenChange={onOpenChange} open={open}>
      <UiDialogHeader>
        <UiDialogTitle />
        <UiDialogDescription></UiDialogDescription>
      </UiDialogHeader>
      <UiDialogTrigger {...triggerProps} asChild>
        {trigger}
      </UiDialogTrigger>
      <UiDialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        scrollType={scrollType}
        onPointerDownOutside={onPointerDownOutside}
        className={cn(modalStyles({ variant, scrollType }), className)}
        {...rest}
      >
        <UiDialogHeader
          className={cn(
            "mt-5 h-min w-full",
            header ? "justify-between" : "justify-end"
          )}
        >
          {header}
          {withCloseBtn && (
            <UiModalClose className={modalCloseStyles(closeStyles)}>
              <X />
              <span className="sr-only">Close</span>
            </UiModalClose>
          )}
        </UiDialogHeader>
        {scrollType === "container" ? (
          <UiScrollArea className={"h-full max-h-[90vh]"}>
            {children}
          </UiScrollArea>
        ) : (
          children
        )}
      </UiDialogContent>
    </UiDialog>
  )
}

export { UiModalClose, UiModal }
