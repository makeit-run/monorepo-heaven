import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import * as React from "react"

import { UiTooltip, UiTooltipContent, UiTooltipTrigger } from "../UiTooltip"
import { avatarFallbackStyles, avatarImageStyles, avatarStyles } from "./config"

const UiAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
    VariantProps<typeof avatarStyles>
>(({ variant, className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarStyles({ variant }), className)}
    {...props}
  />
))
UiAvatar.displayName = AvatarPrimitive.Root.displayName

const UiAvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
    VariantProps<typeof avatarImageStyles>
>(({ variant, className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(avatarImageStyles({ variant }), className)}
    {...props}
  />
))
UiAvatarImage.displayName = AvatarPrimitive.Image.displayName

const UiAvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
    VariantProps<typeof avatarFallbackStyles>
>(({ variant, className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarFallbackStyles({ variant }), className)}
    {...props}
  />
))
UiAvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

interface UiAvatarGroupProps {
  images: {
    src?: string
    base64?: string
    alt?: string
    fallback?: string
  }[]
  viewCount?: number
  withRemainder?: boolean
}

const UiAvatarGroup = React.forwardRef<
  React.ElementRef<"div">,
  UiAvatarGroupProps
>(({ images, viewCount, withRemainder = true }, ref) => {
  const slicer = viewCount || images?.length
  const remainder = images?.length - slicer > 0 ? images?.length - slicer : 0

  const firstPart = images?.slice(0, slicer)
  const secondPart = images?.slice(slicer)

  return (
    <div
      ref={ref}
      className={
        "flex items-center justify-center [&_>:not(:first-child)]:-ml-5"
      }
    >
      {firstPart?.map((image) => (
        <UiAvatar key={image?.src} className={"border border-white bg-white"}>
          {image?.src ? (
            <UiAvatarImage src={image?.src} alt={image?.alt || ""} />
          ) : (
            <UiAvatarFallback>{image?.fallback}</UiAvatarFallback>
          )}
        </UiAvatar>
      ))}

      {withRemainder && !!remainder && (
        <UiTooltip>
          <UiTooltipTrigger asChild>
            <UiAvatar
              className={
                "bg-primary cursor-pointer border border-white text-white duration-200 hover:border-black/60"
              }
            >
              <UiAvatarFallback>+{remainder}</UiAvatarFallback>
            </UiAvatar>
          </UiTooltipTrigger>
          <UiTooltipContent
            className={
              "flex max-w-96 flex-wrap items-center justify-center gap-2"
            }
          >
            {secondPart?.map((image) => (
              <UiAvatar
                key={image?.src}
                className={"border border-white bg-white"}
              >
                {image?.src ? (
                  <UiAvatarImage src={image?.src} alt={image?.alt} />
                ) : (
                  <UiAvatarFallback>{image?.fallback}</UiAvatarFallback>
                )}
              </UiAvatar>
            ))}
          </UiTooltipContent>
        </UiTooltip>
      )}
    </div>
  )
})
UiAvatarGroup.displayName = UiAvatarGroup.name

export { UiAvatar, UiAvatarImage, UiAvatarFallback, UiAvatarGroup }
