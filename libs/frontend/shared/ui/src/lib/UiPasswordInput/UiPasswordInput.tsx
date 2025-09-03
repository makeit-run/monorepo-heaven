'use client';

import { cn } from '@shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, InputHTMLAttributes, useState } from 'react';

import { UiLabel } from '../UiLabel';
import { passwordInputIconStyles, passwordInputVariants } from './config';

interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'size' | 'color' | 'type'
    >,
    VariantProps<typeof passwordInputVariants> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  visiblePassword?: boolean;
  wrapperClassName?: string;
  iconStyles?: VariantProps<typeof passwordInputIconStyles>;
}

export const UiPasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      className,
      label,
      error,
      size,
      wrapperClassName,
      iconStyles,
      visiblePassword = true,
      fullWidth = true,
      color,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const onClickHandler = () => setIsVisible(!isVisible);

    return (
      <div
        className={cn(
          'font-roboto inline-block text-left',
          fullWidth ? 'w-full' : 'w-auto',
          wrapperClassName
        )}
      >
        {!label && (
          <UiLabel className="sr-only" htmlFor={id}>
            {id}
          </UiLabel>
        )}
        {label && <UiLabel htmlFor={id}>{label}</UiLabel>}
        <div className={'relative'}>
          <input
            type={isVisible ? 'text' : 'password'}
            id={id}
            autoCapitalize="none"
            autoComplete="password"
            className={cn(
              passwordInputVariants({ size, color }),
              error ? 'border-red-500' : '',
              className
            )}
            ref={ref}
            {...props}
          />
          {visiblePassword &&
            (isVisible ? (
              <EyeOff
                onClick={onClickHandler}
                className={passwordInputIconStyles({
                  ...iconStyles,
                  variant: 'active',
                })}
              />
            ) : (
              <Eye
                onClick={onClickHandler}
                className={passwordInputIconStyles(iconStyles)}
              />
            ))}
        </div>
        {error && <p className="px-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

UiPasswordInput.displayName = 'Input';
