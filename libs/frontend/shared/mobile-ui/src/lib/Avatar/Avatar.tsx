import { cn } from "@shared/utils/cn"
import * as React from "react"

import * as AvatarPrimitive from "../@Primitives/components/Avatar"

const Avatar = React.forwardRef<
  AvatarPrimitive.RootRef,
  AvatarPrimitive.RootProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex size-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  AvatarPrimitive.ImageRef,
  AvatarPrimitive.ImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square size-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  AvatarPrimitive.FallbackRef,
  AvatarPrimitive.FallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "bg-muted flex size-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
