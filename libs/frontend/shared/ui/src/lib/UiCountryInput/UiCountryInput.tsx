'use client';

import { cn } from '@shared/utils/cn';
import { Country } from 'country-state-city';
import { ChevronDown } from 'lucide-react';
import { forwardRef, InputHTMLAttributes, useRef, useState } from 'react';
import { type VariantProps } from 'class-variance-authority';

import {
  UiCommand,
  UiCommandEmpty,
  UiCommandGroup,
  UiCommandInput,
  UiCommandItem,
  UiCommandList,
} from '../UiCommand/UiCommand';
import { defaultPhoneCountries } from '../UiPhoneInput/phone-countries';
import {
  UiPopover,
  UiPopoverContent,
  UiPopoverTrigger,
} from '../UiPopover/UiPopover';
import { UiTextInput } from '../UiTextInput/UiTextInput';
import {
  countryInputTriggerVariants,
  countryInputChevronVariants,
  countryInputPopoverContentVariants,
} from './config';

export interface CountriesInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>,
    VariantProps<typeof countryInputTriggerVariants> {
  onCountrySelect: (country: string) => void;
  onSelectCountryCode: (countryCode: string) => void;
  label?: string;
  error?: string;
  defaultValue?: string;
}

export const UiCountryInput = forwardRef<HTMLInputElement, CountriesInputProps>(
  (
    {
      onCountrySelect,
      onSelectCountryCode,
      value,
      variant,
      ...props
    }: CountriesInputProps,
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const input = useRef<HTMLInputElement>(null);

    const onSelectCountry = (c: string) => {
      onCountrySelect(c);
      if (input.current) input.current.value = c;
      setIsOpen(false);
    };

    const onOpenChange = (open: boolean) => setIsOpen(open);

    const renderCountryName = (
      value: string | number | readonly string[]
    ): string => {
      const stringValue = value.toString();
      return (
        (stringValue.length < 3
          ? Country.getCountryByCode(stringValue)?.name
          : stringValue) || ''
      );
    };

    return (
      <UiPopover onOpenChange={onOpenChange} open={isOpen} modal>
        <UiPopoverTrigger
          onClick={() => setIsOpen(true)}
          className={countryInputTriggerVariants({ variant })}
        >
          <UiTextInput
            value={renderCountryName(value || '') || ''}
            ref={input}
            icon={
              <ChevronDown
                className={cn(
                  countryInputChevronVariants({ variant }),
                  isOpen && '!rotate-180'
                )}
              />
            }
            {...props}
          />
        </UiPopoverTrigger>
        <UiPopoverContent
          className={countryInputPopoverContentVariants({ variant })}
          style={{
            width: 'var(--radix-popover-trigger-width)',
            maxHeight: 'var(--radix-popover-content-available-height)',
          }}
          side={'bottom'}
        >
          <UiCommand loop>
            <UiCommandInput placeholder="Type a command or search..." />
            <UiCommandList>
              <UiCommandEmpty>No results found.</UiCommandEmpty>
              <UiCommandGroup id={'popover-country-input'}>
                {defaultPhoneCountries?.map((c, i) => (
                  <UiCommandItem
                    key={`${i}${c[1]}`}
                    onSelect={() => {
                      onSelectCountryCode(c[1]);
                      onSelectCountry(c[0]);
                    }}
                  >
                    {c[0]}
                  </UiCommandItem>
                ))}
              </UiCommandGroup>
            </UiCommandList>
          </UiCommand>
        </UiPopoverContent>
      </UiPopover>
    );
  }
);
UiCountryInput.displayName = 'SelectCountries';