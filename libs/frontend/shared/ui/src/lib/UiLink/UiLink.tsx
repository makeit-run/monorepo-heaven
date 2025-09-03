'use client';

import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';

import { useLazyRouter } from '@frontend/shared/hooks/hooks/useLazyRouter';
import { cn } from '@shared/utils/cn';
import { linkVariants } from './config';

export interface UiLinkProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  withAnimation?: boolean;
}

const UiLink = React.forwardRef<HTMLDivElement, UiLinkProps>(
  (
    {
      className,
      variant,
      color,
      size,
      withAnimation = true,
      href,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const { lazyPush, isPending } = useLazyRouter();

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
      event.preventDefault();
      onClick?.(event);
      lazyPush(href);
    };

    return (
      <div
        data-slot="link"
        role="button"
        tabIndex={0}
        ref={ref}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            lazyPush(href);
          }
        }}
        className={cn(
          linkVariants({ variant, color, size }),
          withAnimation &&
            isPending &&
            'before:animate-loading before:absolute before:-bottom-0 before:left-0 before:h-0.5 before:w-full before:rounded-md before:bg-primary before:content-[""]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

UiLink.displayName = 'UiLink';

export { UiLink };
