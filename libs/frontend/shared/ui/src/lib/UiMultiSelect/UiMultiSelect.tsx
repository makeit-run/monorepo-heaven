"use client"

import { VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"

import { UiBadge } from "../UiBadge"
import { UiCommand, UiCommandGroup, UiCommandItem } from "../UiCommand"
import { multiSelectInputStyles } from "./config"

type ItemType = Record<"value" | "label", string>

interface UiMultiSelectProps {
  data: ItemType[] | null | undefined
  inputStyle?: VariantProps<typeof multiSelectInputStyles>
}

export function UiMultiSelect({ data, inputStyle }: UiMultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<ItemType[]>([])

  const handleUnselect = React.useCallback((item: ItemType) => {
    setSelected((prev) => prev.filter((s) => s.value !== item.value))
  }, [])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev]
              newSelected.pop()
              return newSelected
            })
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur()
        }
      }
    },
    []
  )

  const selectables = data?.filter((framework) => !selected.includes(framework))

  return (
    <UiCommand
      onKeyDown={handleKeyDown}
      className="!w-fit !min-w-[200px] overflow-visible bg-transparent"
    >
      <div className="group relative flex min-h-[48px] w-full items-center rounded-md border px-3 py-2 text-sm">
        <input
          readOnly
          ref={inputRef}
          onBlur={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          className={multiSelectInputStyles(inputStyle)}
        />
        <div className="z-[1] flex flex-wrap gap-1">
          {selected.map((item) => (
            <UiBadge className={"z-[1]"} key={item.value} variant="outline">
              {item.label}
              <button
                className="ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleUnselect(item)
                }}
                onMouseDown={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
                onClick={() => handleUnselect(item)}
              >
                <X className="text-muted-foreground hover:text-foreground size-3" />
              </button>
            </UiBadge>
          ))}
        </div>
      </div>
      <div className="relative mt-2 w-full">
        {open && selectables && selectables?.length > 0 ? (
          <div className="animate-in absolute top-0 z-[1] w-full rounded-md border bg-white shadow-md outline-none">
            <UiCommandGroup className="h-full overflow-auto">
              {selectables?.map((item) => (
                <UiCommandItem
                  key={item.value}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onSelect={() => setSelected((prev) => [...prev, item])}
                  className={"cursor-pointer"}
                >
                  {item.label}
                </UiCommandItem>
              ))}
            </UiCommandGroup>
          </div>
        ) : null}
      </div>
    </UiCommand>
  )
}
