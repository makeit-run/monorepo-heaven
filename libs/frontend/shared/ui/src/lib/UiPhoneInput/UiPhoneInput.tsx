'use client';

import { cn } from '@shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import { forwardRef, useId, useState } from 'react';
import {
  ParsedCountry,
  PhoneInput,
  PhoneInputProps,
} from 'react-international-phone';

import { UiLabel } from '../UiLabel';
import {
  phoneInputCountrySelectorButtonStyles,
  phoneInputStyles,
  phoneInputWrapperStyles,
} from './config';
import { defaultPhoneCountries } from './phone-countries';

interface UiPhoneInputProps
  extends Omit<PhoneInputProps, 'value' | 'onChange'>,
    VariantProps<typeof phoneInputStyles> {
  error?: string;
  wrapperClassName?: string;
  label?: string;
  onChangePhoneCountryCode: (value: string) => void;
  value?: string | null | undefined;
  labelClassName?: string;
  onChange: (
    phone: string,
    meta: {
      country: ParsedCountry;
      inputValue: string;
    }
  ) => void;
}

export const UiPhoneInput = forwardRef(
  (
    {
      className,
      inputClassName,
      wrapperClassName,
      error,
      label,
      onChange,
      onChangePhoneCountryCode,
      value,
      variant,
      labelClassName,
      ...props
    }: UiPhoneInputProps,
    ref
  ) => {
    const id = useId();

    const [isFocus, setIsFocus] = useState<boolean>(false);

    const onPhoneChangeHandler = (
      phone: string,
      meta: {
        country: ParsedCountry;
        inputValue: string;
      }
    ) => {
      onChange(phone, meta);
      onChangePhoneCountryCode(meta.country.iso2);
    };

    return (
      <div className={cn('w-full', wrapperClassName)}>
        {!label && (
          <UiLabel className="sr-only" htmlFor={id}>
            phoneInput
          </UiLabel>
        )}
        {label && (
          <UiLabel htmlFor={id} className={labelClassName}>
            {label}
          </UiLabel>
        )}
        <PhoneInput
          countries={defaultPhoneCountries}
          defaultCountry={'us'}
          onChange={onPhoneChangeHandler}
          inputProps={{
            id,
            onFocus: () => setIsFocus(true),
            onBlur: () => setIsFocus(false),
          }}
          countrySelectorStyleProps={{
            buttonClassName: cn(phoneInputCountrySelectorButtonStyles(), {
              'outline-none !ring-primary ring-2 ring-ring': isFocus,
            }),
          }}
          className={cn(
            phoneInputWrapperStyles(),
            { 'border-red-500': error },
            className
          )}
          inputClassName={cn(phoneInputStyles({ variant }), inputClassName)}
          value={value || ''}
          {...props}
        />
        {error && (
          <p className="flex px-1 pt-1.5 text-left text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
UiPhoneInput.displayName = 'UiPhoneInput';
