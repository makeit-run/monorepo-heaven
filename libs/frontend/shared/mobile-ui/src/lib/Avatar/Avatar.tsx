import React from 'react';
import { cn } from '@shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import * as AvatarPrimitive from '../@Primitives/components/Avatar';
import {
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
} from './config';

// Create context for variant propagation
const AvatarContext = React.createContext<{
  variant?: VariantProps<typeof avatarVariants>['variant'];
  size?: VariantProps<typeof avatarVariants>['size'];
}>({ variant: 'default', size: 'md' });

function Avatar({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: AvatarPrimitive.RootProps &
  React.RefAttributes<AvatarPrimitive.RootRef> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarContext.Provider value={{ variant, size }}>
      <AvatarPrimitive.Root
        className={cn(avatarVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </AvatarPrimitive.Root>
    </AvatarContext.Provider>
  );
}

function AvatarImage({
  className,
  ...props
}: AvatarPrimitive.ImageProps & React.RefAttributes<AvatarPrimitive.ImageRef>) {
  const { variant } = React.useContext(AvatarContext);

  return (
    <AvatarPrimitive.Image
      className={cn(
        avatarImageVariants({ variant: variant as any }),
        className
      )}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.FallbackProps &
  React.RefAttributes<AvatarPrimitive.FallbackRef>) {
  const { variant } = React.useContext(AvatarContext);

  return (
    <AvatarPrimitive.Fallback
      className={cn(
        avatarFallbackVariants({ variant: variant as any }),
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarFallback, AvatarImage };
