"use client"

import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import Image, { ImageProps } from "next/image"
import { CSSProperties, useState } from "react"

import { imageStyles } from "./config"

export interface UiImageProps
  extends Omit<ImageProps, "width" | "height" | "blurDataURL">,
    VariantProps<typeof imageStyles> {
  isAnimated?: boolean
  width?: number | undefined
  height?: number | undefined
  wrapperClassName?: string
  customBlurDataURL?: string
  wrapperStyle?: CSSProperties
  blurDataURL?: string | null
}

export const UiImage = ({
  variant,
  blurDataURL = "",
  width,
  height,
  fill,
  alt,
  wrapperClassName,
  customBlurDataURL,
  isAnimated = false,
  unoptimized = true,
  wrapperStyle,
  className,
  ...rest
}: UiImageProps) => {
  const [isLoading, setLoading] = useState(isAnimated)

  const splitSrc = typeof rest?.src === "string" ? rest?.src?.split(".") : "png"
  const imgFormat = splitSrc?.at(-1)
  const blurData = `data:image/${imgFormat};base64,${blurDataURL}`
  const placeholder = customBlurDataURL || blurDataURL ? "blur" : "empty"

  const isFill = fill || !width || !height

  return (
    <div
      style={wrapperStyle}
      className={cn("relative overflow-hidden", wrapperClassName)}
    >
      <Image
        className={cn(
          "object-cover duration-700 ease-in-out",
          isLoading ? "blur-md" : "blur-0",
          className
        )}
        onLoad={isAnimated ? () => setLoading(false) : undefined}
        placeholder={placeholder}
        blurDataURL={customBlurDataURL || blurData}
        fill={isFill}
        width={width}
        height={height}
        alt={alt}
        unoptimized={unoptimized}
        {...rest}
      />
    </div>
  )
}
