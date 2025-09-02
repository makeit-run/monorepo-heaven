import { cn } from '@shared/utils/cn';
import { Minus, Plus } from 'lucide-react';
import * as React from 'react';
import type { VariantProps } from 'tailwind-variants';

import { UiButton } from '@frontend/shared/ui/UiButton';

import { stepperVariants } from './config';

export interface StepperProps
  extends Omit<VariantProps<typeof stepperVariants>, 'state'> {
  className?: string;
  value: number;
  onValueChange: (value: number) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
  disabled?: boolean;
  id?: string;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      style,
      size,
      value,
      onValueChange,
      minValue = 0,
      maxValue = Infinity,
      step = 1,
      disabled = false,
      id,
      ...props
    },
    ref
  ) => {
    const [animationKey, setAnimationKey] = React.useState(0);

    const isDecrementDisabled = disabled || value <= minValue;
    const isIncrementDisabled = disabled || value >= maxValue;

    const handleDecrement = () => {
      if (isDecrementDisabled) return;

      const newValue = Math.max(minValue, value - step);
      onValueChange(newValue);
      setAnimationKey((prev) => prev + 1);
    };

    const handleIncrement = () => {
      if (isIncrementDisabled) return;

      const newValue = Math.min(maxValue, value + step);
      onValueChange(newValue);
      setAnimationKey((prev) => prev + 1);
    };

    const { container, button, buttonWrapper, valueWrapper, valueText } =
      stepperVariants({
        style,
        size,
        state: disabled ? 'disabled' : 'enabled',
      });

    return (
      <div className={cn(container(), className)} ref={ref} id={id} {...props}>
        <div className={buttonWrapper()}>
          <button
            type="button"
            className={cn(button(), isDecrementDisabled && 'opacity-50')}
            onClick={handleDecrement}
            disabled={isDecrementDisabled}
            aria-label="Decrease value"
          >
            <Minus size={18} strokeWidth={3} />
          </button>
        </div>

        <div className={valueWrapper()}>
          <span
            key={animationKey}
            className={cn(valueText(), 'animate-in zoom-in-110 duration-200')}
          >
            {value}
          </span>
        </div>

        <UiButton
          type="button"
          className={cn(button(), isIncrementDisabled && 'opacity-50')}
          onClick={handleIncrement}
          disabled={isIncrementDisabled}
          aria-label="Increase value"
        >
          <Plus size={18} strokeWidth={3} />
        </UiButton>
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';
