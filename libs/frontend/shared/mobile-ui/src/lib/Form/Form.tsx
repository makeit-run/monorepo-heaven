import { cn } from "@shared/utils/cn"
import { CircleHelp } from "lucide-react-native"
import React, {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  ReactNode,
  useContext,
  useId,
  useState
} from "react"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext
} from "react-hook-form"
import { Text as ReactNativeText, TouchableOpacity, View } from "react-native"
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet"
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes"
import type { VariantProps } from "tailwind-variants"

import { formItemVariants } from "@frontend/shared/mobile-ui/Form/config"
import { LucideIcon } from "@frontend/shared/mobile-ui/LucideIcon"

import * as Slot from "../@Primitives/components/Slot"
import { Text, textVariants } from "../Text"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

interface FormItemProps extends VariantProps<typeof formItemVariants> {
  className?: string
  style?: StyleProp<ViewStyle>
  children: ReactNode
}

const FormItem = ({ className, style, space, children }: FormItemProps) => {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <View
        style={style}
        className={cn(formItemVariants({ space }), className)}
      >
        {children}
      </View>
    </FormItemContext.Provider>
  )
}

interface FormLabelProps extends VariantProps<typeof textVariants> {
  className?: string
  children: ReactNode
}

const FormLabel = ({
  className,
  color,
  children,
  variant = "body2"
}: FormLabelProps) => {
  const { error, formItemId } = useFormField()
  const errorMessage = String(error?.message) || ""

  return (
    <View className="mb-2 flex-row items-center justify-between">
      <Text
        color={(error && "error") || color || "black-300"}
        variant={variant}
        className={className}
        accessibilityLabel={formItemId}
      >
        {children}
      </Text>
      {error && <FormLabelError error={errorMessage} />}
    </View>
  )
}

interface FormLabelErrorProps {
  error: string
}

const FormLabelError = ({ error }: FormLabelErrorProps) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <LucideIcon icon={CircleHelp} size={20} className={"text-error"} />
      </TouchableOpacity>
      {visible && (
        <View className="absolute right-0 top-8 z-20">
          <View className="bg-error rounded-lg p-4 shadow-md">
            <View className="bg-error absolute -top-2 right-4 size-4 rotate-45" />
            <ReactNativeText className="text-sm font-medium text-white">
              {error}
            </ReactNativeText>
          </View>
        </View>
      )}
    </>
  )
}

const FormControl = forwardRef<
  ElementRef<typeof Slot.View>,
  ComponentPropsWithoutRef<typeof Slot.View>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot.View
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})

interface FormDescriptionProps {
  className?: string
  children: ReactNode
}

const FormDescription = ({ className, children }: FormDescriptionProps) => {
  const { formDescriptionId } = useFormField()

  return (
    <ReactNativeText
      className={cn("mt-1 text-sm text-gray-500", className)}
      accessibilityLabel={formDescriptionId}
    >
      {children}
    </ReactNativeText>
  )
}

interface FormMessageProps {
  className?: string
  children?: ReactNode
}

const FormMessage = ({ className, children }: FormMessageProps) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <View className="relative">
      <View className="absolute inset-x-0 z-10">
        <View className="bg-error rounded-lg p-4 shadow-md">
          <View className="bg-error absolute -top-2 left-1/2 -ml-2 size-4 rotate-45" />
          <ReactNativeText
            className={cn("text-base font-medium text-white", className)}
            accessibilityLabel={formMessageId}
          >
            {body}
          </ReactNativeText>
        </View>
      </View>
    </View>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField
}
