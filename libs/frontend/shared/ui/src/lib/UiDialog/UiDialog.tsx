import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"

import { ModalScrollType } from "../UiModal/UiModal"
import {
  dialogCloseStyles,
  dialogContentStyles,
  dialogDescriptionStyles,
  dialogFooterStyles,
  dialogHeaderStyles,
  dialogOverlayStyles,
  dialogTitleStyles
} from "./config"

const UiDialog = DialogPrimitive.Root
const UiDialogClose = DialogPrimitive.Close
const UiDialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
)

DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> &
    VariantProps<typeof dialogOverlayStyles> & {
      scrollType?: ModalScrollType
    }
>(({ className, scrollType, variant, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={dialogOverlayStyles({ scrollType, variant })}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const UiDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogContentStyles> & {
      withCloseBtn?: boolean
      scrollType?: ModalScrollType
      closeStyles?: VariantProps<typeof dialogCloseStyles>
    }
>(
  (
    {
      className,
      withCloseBtn,
      closeStyles,
      variant,
      scrollType,
      children,
      ...props
    },
    ref
  ) => (
    <DialogPortal>
      <DialogOverlay scrollType={scrollType}>
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            dialogContentStyles({ scrollType, variant }),
            className
          )}
          {...props}
        >
          {children}
          {withCloseBtn && (
            <DialogPrimitive.Close className={dialogCloseStyles(closeStyles)}>
              <X size={30} strokeWidth={2} className="text-primary" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  )
)
UiDialogContent.displayName = DialogPrimitive.Content.displayName

interface UiDialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogHeaderStyles> {}

const UiDialogHeader = ({ className, ...props }: UiDialogHeaderProps) => (
  <div className={cn(dialogHeaderStyles(), className)} {...props} />
)
UiDialogHeader.displayName = "DialogHeader"

interface UiDialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogFooterStyles> {}

const UiDialogFooter = ({
  variant,
  className,
  ...props
}: UiDialogFooterProps) => (
  <div className={cn(dialogFooterStyles({ variant }), className)} {...props} />
)
UiDialogFooter.displayName = "DialogFooter"

const UiDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> &
    VariantProps<typeof dialogTitleStyles>
>(({ className, variant, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(dialogTitleStyles({ variant }), className)}
    {...props}
  />
))
UiDialogTitle.displayName = DialogPrimitive.Title.displayName

const UiDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> &
    VariantProps<typeof dialogDescriptionStyles>
>(({ className, variant, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(dialogDescriptionStyles({ variant }), className)}
    {...props}
  />
))
UiDialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  UiDialog,
  UiDialogTrigger,
  UiDialogContent,
  UiDialogHeader,
  UiDialogFooter,
  UiDialogTitle,
  UiDialogDescription,
  UiDialogClose
}
