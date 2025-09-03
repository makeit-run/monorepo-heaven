'use client';

import { VariantProps } from 'class-variance-authority';
import {
  switchVariants,
  switchThumbVariants,
} from '@frontend/shared/ui/UiSwitch/config';
import {
  themeSwitchVariants,
  themeSwitchSunIconVariants,
  themeSwitchThumbVariants,
  themeSwitchMoonIconVariants,
} from './config';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@shared/utils/cn';
import { Moon, Sun } from 'lucide-react';
import * as React from 'react';

interface UiThemeSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof themeSwitchVariants>,
    VariantProps<typeof themeSwitchSunIconVariants>,
    VariantProps<typeof themeSwitchThumbVariants>,
    VariantProps<typeof themeSwitchMoonIconVariants> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  themeSwitchVariant?: VariantProps<typeof themeSwitchVariants>['variant'];
  sunIconVariant?: VariantProps<typeof themeSwitchSunIconVariants>['variant'];
  thumbVariant?: VariantProps<typeof themeSwitchThumbVariants>['variant'];
  moonIconVariant?: VariantProps<typeof themeSwitchMoonIconVariants>['variant'];
}

const UiThemeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  UiThemeSwitchProps
>(({ 
  className, 
  checked, 
  onCheckedChange, 
  themeSwitchVariant = 'default',
  sunIconVariant = 'default',
  thumbVariant = 'default',
  moonIconVariant = 'default',
  ...props 
}, ref) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        switchVariants({
          variant: 'default',
        }),
        themeSwitchVariants({ variant: themeSwitchVariant }),
        className
      )}
      checked={checked}
      onCheckedChange={onCheckedChange}
      ref={ref}
      {...props}
    >
      {/* Sun Icon (Light Mode) */}
      <span className={cn(themeSwitchSunIconVariants({ variant: sunIconVariant }))}>
        <Sun size={18} />
      </span>

      {/* Switch Thumb - Now Fully Moving */}
      <SwitchPrimitives.Thumb
        className={cn(
          switchThumbVariants({
            variant: 'default',
          }),
          themeSwitchThumbVariants({ variant: thumbVariant })
        )}
      />

      {/* Moon Icon (Dark Mode) */}
      <span className={cn(themeSwitchMoonIconVariants({ variant: moonIconVariant }))}>
        <Moon size={18} />
      </span>
    </SwitchPrimitives.Root>
  );
});

UiThemeSwitch.displayName = 'UiThemeSwitch';

export { UiThemeSwitch };
