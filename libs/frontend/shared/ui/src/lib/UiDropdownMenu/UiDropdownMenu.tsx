import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import { Check, ChevronRight, Circle } from "lucide-react"
import * as React from "react"

import {
  dropdownMenuCheckboxItemStyles,
  dropdownMenuContentStyles,
  dropdownMenuItemStyles,
  dropdownMenuLabelStyles,
  dropdownMenuRadioItemStyles,
  dropdownMenuShortcutStyles,
  dropdownMenuSubContentStyles,
  dropdownMenuSubTriggerStyles,
  itemIndicatorStyles
} from "./config"

const UiDropdownMenu = ({
  modal = false,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) => {
  return <DropdownMenuPrimitive.Root modal={modal} {...props} />
}

const UiDropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const UiDropdownMenuGroup = DropdownMenuPrimitive.Group
const UiDropdownMenuPortal = DropdownMenuPrimitive.Portal
const UiDropdownMenuSub = DropdownMenuPrimitive.Sub
const UiDropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const UiDropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> &
    VariantProps<typeof dropdownMenuSubTriggerStyles> & {
      inset?: boolean
    }
>(({ className, variant, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      dropdownMenuSubTriggerStyles({ variant }),
      { "pl-8": inset },
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto size-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
UiDropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const UiDropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> &
    VariantProps<typeof dropdownMenuSubContentStyles>
>(({ className, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(dropdownMenuSubContentStyles({ variant }), className)}
    {...props}
  />
))
UiDropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const UiDropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> &
    VariantProps<typeof dropdownMenuContentStyles>
>(({ className, variant, shadow, sideOffset = 4, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          dropdownMenuContentStyles({ variant, shadow }),
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
})
UiDropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const UiDropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> &
    VariantProps<typeof dropdownMenuItemStyles> & {
      inset?: boolean
    }
>(({ className, variant, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      dropdownMenuItemStyles({ variant }),
      { "pl-8": inset },
      className
    )}
    {...props}
  />
))
UiDropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const UiDropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> &
    VariantProps<typeof dropdownMenuCheckboxItemStyles>
>(({ className, variant, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(dropdownMenuCheckboxItemStyles({ variant }), className)}
    checked={checked}
    {...props}
  >
    <span className={itemIndicatorStyles()}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="size-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
UiDropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const UiDropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> &
    VariantProps<typeof dropdownMenuRadioItemStyles>
>(({ className, variant, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(dropdownMenuRadioItemStyles({ variant }), className)}
    {...props}
  >
    <span className={itemIndicatorStyles()}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="size-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
UiDropdownMenuRadioItem.displayName =
  DropdownMenuPrimitive.RadioItem.displayName

const UiDropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> &
    VariantProps<typeof dropdownMenuLabelStyles> & {
      inset?: boolean
    }
>(({ className, variant, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      dropdownMenuLabelStyles({ variant }),
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
UiDropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const UiDropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-gray-200", className)}
    ref={ref}
    {...props}
  />
))
UiDropdownMenuSeparator.displayName =
  DropdownMenuPrimitive.Separator.displayName

interface UiDropdownMenuShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof dropdownMenuShortcutStyles> {}

const UiDropdownMenuShortcut = ({
  variant,
  className,
  ...props
}: UiDropdownMenuShortcutProps) => {
  return (
    <span
      className={cn(dropdownMenuShortcutStyles({ variant }), className)}
      {...props}
    />
  )
}
UiDropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  UiDropdownMenu,
  UiDropdownMenuTrigger,
  UiDropdownMenuContent,
  UiDropdownMenuItem,
  UiDropdownMenuCheckboxItem,
  UiDropdownMenuRadioItem,
  UiDropdownMenuLabel,
  UiDropdownMenuSeparator,
  UiDropdownMenuShortcut,
  UiDropdownMenuGroup,
  UiDropdownMenuPortal,
  UiDropdownMenuSub,
  UiDropdownMenuSubContent,
  UiDropdownMenuSubTrigger,
  UiDropdownMenuRadioGroup
}
