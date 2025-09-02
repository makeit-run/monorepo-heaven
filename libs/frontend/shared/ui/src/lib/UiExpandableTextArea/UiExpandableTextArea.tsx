"use client"

import { useDebounce } from "@frontend/shared/hooks/hooks/useDebounce"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import React, {
  forwardRef,
  RefObject,
  useEffect,
  useId,
  useImperativeHandle,
  useRef
} from "react"

import { UiLabel } from "../UiLabel/UiLabel"
import { expandableTextAreaStyles } from "./config"

interface UiExpandableTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof expandableTextAreaStyles> {
  label?: string
  error?: string
  minHeight?: number
  maxHeight?: number
}

interface UseAutosizeTextAreaProps {
  textAreaRef: RefObject<HTMLTextAreaElement | null>
  triggerAutoSize: string
  maxHeight: number
  minHeight: number
}

function useAutosizeTextArea({
  textAreaRef,
  triggerAutoSize,
  maxHeight,
  minHeight
}: UseAutosizeTextAreaProps) {
  const adjustHeight = () => {
    const offsetBorder = 2
    if (textAreaRef.current) {
      textAreaRef.current.style.minHeight = `${minHeight + offsetBorder}px`
      textAreaRef.current.style.maxHeight = `${maxHeight}px`
      textAreaRef.current.style.height = `${minHeight + offsetBorder}px`
      const scrollHeight = textAreaRef.current.scrollHeight
      textAreaRef.current.style.height =
        scrollHeight > maxHeight
          ? `${maxHeight}px`
          : `${scrollHeight + offsetBorder}px`
    }
  }

  const debouncedAdjustHeight = useDebounce(adjustHeight, 50)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window?.addEventListener("resize", debouncedAdjustHeight)
      adjustHeight()
    }
    return () => {
      window?.removeEventListener("resize", debouncedAdjustHeight)
    }
  }, [textAreaRef?.current?.value, triggerAutoSize, maxHeight, minHeight])
}
const UiExpandableTextArea = forwardRef<
  HTMLTextAreaElement,
  UiExpandableTextareaProps
>(
  (
    {
      id,
      minHeight = 100,
      maxHeight = 100,
      className,
      variant,
      label,
      error,
      ...props
    },
    ref
  ) => {
    const reactId = useId()
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const idGenerated = id ? id : reactId

    useImperativeHandle(ref, () => textAreaRef.current as HTMLTextAreaElement)

    useAutosizeTextArea({
      textAreaRef,
      triggerAutoSize:
        textAreaRef?.current?.value || props?.defaultValue?.toString() || "",
      maxHeight,
      minHeight
    })

    return (
      <>
        {label && <UiLabel htmlFor={idGenerated}>{label}</UiLabel>}

        <textarea
          aria-label={id}
          name={id}
          id={idGenerated}
          ref={textAreaRef}
          className={cn(
            expandableTextAreaStyles({ variant }),
            { "border-red-500": error },
            className
          )}
          {...props}
        />
        <div className="mt-[1.5] min-h-6 text-xs text-red-600">{error}</div>
      </>
    )
  }
)

UiExpandableTextArea.displayName = "UiExpandableTextarea"
export { UiExpandableTextArea }
