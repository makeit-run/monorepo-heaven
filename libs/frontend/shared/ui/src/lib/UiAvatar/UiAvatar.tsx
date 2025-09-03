'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@shared/utils/cn';
import { type VariantProps } from 'class-variance-authority';
import {
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
} from './config';

interface UiAvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

function UiAvatar({ className, variant, ...props }: UiAvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiAvatarImageProps
  extends React.ComponentProps<typeof AvatarPrimitive.Image>,
    VariantProps<typeof avatarImageVariants> {}

function UiAvatarImage({ className, variant, ...props }: UiAvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(avatarImageVariants({ variant }), className)}
      {...props}
    />
  );
}

interface UiAvatarFallbackProps
  extends React.ComponentProps<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarFallbackVariants> {}

function UiAvatarFallback({
  className,
  variant,
  ...props
}: UiAvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(avatarFallbackVariants({ variant }), className)}
      {...props}
    />
  );
}

export { UiAvatar, UiAvatarImage, UiAvatarFallback };