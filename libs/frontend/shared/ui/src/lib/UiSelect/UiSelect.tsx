import * as SelectPrimitive from "@radix-ui/react-select"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import * as React from "react"

import {
  selectContentStyles,
  selectItemStyles,
  selectLabelStyles,
  selectSeparatorStyles,
  selectTriggerIconStyles,
  selectTriggerStyles,
  selectViewportStyles
} from "./config"

const UiSelect = SelectPrimitive.Root
type UiSelectProps = SelectPrimitive.SelectProps

const UiSelectGroup = SelectPrimitive.Group

const UiSelectValue = SelectPrimitive.Value

interface UiSelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerStyles> {
  withoutArrow?: boolean
  placeholder?: string
  iconStyle?: VariantProps<typeof selectTriggerIconStyles>
}

const UiSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  UiSelectTriggerProps
>(
  (
    {
      className,
      variant,
      iconStyle,
      withoutArrow,
      children,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(selectTriggerStyles({ variant }), className)}
        {...props}
      >
        <SelectPrimitive.Value
          placeholder={placeholder}
          className={"truncate"}
        />
        {!withoutArrow && (
          <SelectPrimitive.Icon asChild>
            <ChevronDown
              size={"22"}
              className={selectTriggerIconStyles(iconStyle)}
            />
          </SelectPrimitive.Icon>
        )}
      </SelectPrimitive.Trigger>
    )
  }
)
UiSelectTrigger.displayName = SelectPrimitive.Trigger.displayName

interface UiSelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
    Omit<VariantProps<typeof selectContentStyles>, "position"> {}

const UiSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  UiSelectContentProps
>(({ className, variant, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(selectContentStyles({ position, variant }), className)}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className={selectViewportStyles({ position })}>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
UiSelectContent.displayName = SelectPrimitive.Content.displayName

const UiSelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> &
    VariantProps<typeof selectLabelStyles>
>(({ className, variant, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(selectLabelStyles({ variant }), className)}
    {...props}
  />
))
UiSelectLabel.displayName = SelectPrimitive.Label.displayName

const UiSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> &
    VariantProps<typeof selectItemStyles>
>(({ className, variant, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={selectItemStyles({ variant })}
    {...props}
  >
    <SelectPrimitive.ItemText className={className}>
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
UiSelectItem.displayName = SelectPrimitive.Item.displayName

const UiSelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> &
    VariantProps<typeof selectSeparatorStyles>
>(({ className, variant, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(selectSeparatorStyles({ variant }), className)}
    {...props}
  />
))
UiSelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  UiSelect,
  type UiSelectProps,
  UiSelectGroup,
  UiSelectValue,
  UiSelectTrigger,
  UiSelectContent,
  UiSelectLabel,
  UiSelectItem,
  UiSelectSeparator
}
