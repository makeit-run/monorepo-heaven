"use client"

import { useLazyRouter } from "@frontend/shared/hooks/hooks/useLazyRouter"
import { cn } from "@shared/utils/cn"
import { type VariantProps } from "class-variance-authority"
import React from "react"

import { linkStyles } from "./config"

export type UiLinkProps = React.ButtonHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof linkStyles> & {
    href: string
    withAnimation?: boolean
  }

const UiLink = React.forwardRef<HTMLDivElement, UiLinkProps>(
  (
    {
      className,
      variant,
      color,
      padding,
      withAnimation = true,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    const { lazyPush, isPending } = useLazyRouter()

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
      event.preventDefault()
      lazyPush(href)
    }

    return (
      <div
        role={"button"}
        ref={ref}
        onClick={handleClick}
        className={cn(
          "!relative !overflow-hidden !p-1",
          linkStyles({ variant, color, padding }),
          withAnimation &&
            isPending &&
            "before:animate-loading before:absolute before:-bottom-0 before:left-0 before:h-0.5 before:w-full before:rounded-md before:bg-yellow-500 before:content-['']",

          className
        )}
        {...props}
      />
    )
  }
)

UiLink.displayName = "UiLink"

export { UiLink }
