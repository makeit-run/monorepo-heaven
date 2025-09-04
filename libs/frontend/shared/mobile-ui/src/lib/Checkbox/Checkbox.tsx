import React from 'react';
import { cn } from '@shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import * as CheckboxPrimitive from '../@Primitives/components/Checkbox';
import { Check } from 'lucide-react-native';
import { Platform } from 'react-native';
import { LucideIcon } from '../LucideIcon/LucideIcon';
import {
  checkboxVariants,
  checkboxCheckedVariants,
  checkboxIndicatorVariants,
  checkboxIconVariants,
} from './config';

// Create context for variant propagation
const CheckboxContext = React.createContext<{
  variant?: VariantProps<typeof checkboxVariants>['variant'];
  size?: VariantProps<typeof checkboxVariants>['size'];
}>({ variant: 'default', size: 'md' });
const DEFAULT_HIT_SLOP = 24;

function Checkbox({
  className,
  variant = 'default',
  size = 'md',
  checkedClassName,
  indicatorClassName,
  iconClassName,
  ...props
}: CheckboxPrimitive.RootProps &
  React.RefAttributes<CheckboxPrimitive.RootRef> &
  VariantProps<typeof checkboxVariants> & {
    checkedClassName?: string;
    indicatorClassName?: string;
    iconClassName?: string;
  }) {
  const iconSize = size === 'sm' ? 10 : size === 'lg' ? 14 : 12;

  return (
    <CheckboxContext.Provider value={{ variant, size }}>
      <CheckboxPrimitive.Root
        className={cn(
          checkboxVariants({ variant, size }),
          props.checked &&
            cn(checkboxCheckedVariants({ variant }), checkedClassName),
          props.disabled && 'opacity-50',
          className
        )}
        hitSlop={DEFAULT_HIT_SLOP}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            checkboxIndicatorVariants({ variant }),
            indicatorClassName
          )}
        >
          <LucideIcon
            icon={Check}
            size={iconSize}
            strokeWidth={Platform.OS === 'web' ? 2.5 : 3.5}
            className={cn(
              checkboxIconVariants({ variant, size }),
              iconClassName
            )}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </CheckboxContext.Provider>
  );
}

export { Checkbox };
