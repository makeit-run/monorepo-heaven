import { cn } from '@shared/utils/cn';
import * as React from 'react';
import { Text as RNText, TextInput as RNTextInput, View } from 'react-native';
import { type VariantProps } from 'tailwind-variants';

import { Text } from '../Text';
import { textInputLabelVariants, textInputVariants } from './config';

type TextInputProps = React.ComponentPropsWithoutRef<typeof RNTextInput> &
  VariantProps<typeof textInputVariants> & {
    className?: string;
    label?: string;
    helperText?: string;
    error?: string;
    containerClassName?: string;
    labelClassName?: string;
  };

const TextInput = React.forwardRef<
  React.ElementRef<typeof RNTextInput>,
  TextInputProps
>(
  (
    {
      className,
      variant,
      size,
      tv: isTv,
      label,
      helperText,
      error,
      containerClassName,
      labelClassName,
      ...props
    },
    ref
  ) => {
    const inputVariant = error
      ? 'error'
      : props.editable === false
      ? 'disabled'
      : variant;
    const labelVariant = error
      ? 'error'
      : props.editable === false
      ? 'disabled'
      : variant;

    return (
      <View className={cn('self-center', containerClassName)}>
        {label && (
          <Text
            className={cn(
              textInputLabelVariants({ variant: labelVariant, size }),
              labelClassName
            )}
          >
            {label}
          </Text>
        )}
        <RNTextInput
          className={cn(
            textInputVariants({
              variant: inputVariant,
              size,
              tv: isTv,
            }),
            className
          )}
          ref={ref}
          multiline={false}
          editable={props.editable !== false}
          {...props}
        />
        {(error || helperText) && (
          <RNText
            className={cn(
              'mt-1 text-xs',
              error ? 'text-error' : 'text-gray-500'
            )}
          >
            {error || helperText}
          </RNText>
        )}
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput };
export type { TextInputProps };
