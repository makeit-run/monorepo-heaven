'use client';

import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import numeral from 'numeral';

import { cn } from '@shared/utils/cn';
import {
  priceVariants,
  priceCurrencyVariants,
  priceBaseVariants,
  priceDecimalsVariants,
} from './config';

export interface UiPriceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof priceVariants> {
  value: number;
  pattern?: string;
  currency?: string;
  hideDecimals?: boolean;
  hideCurrency?: boolean;
}

function UiPrice({
  className,
  variant,
  size,
  alignment,
  value,
  pattern = '(0,0.00)',
  currency = '$',
  hideDecimals = false,
  hideCurrency = false,
  ...props
}: UiPriceProps) {
  const formattedString = numeral(value).format(pattern);
  const parts = formattedString.split('.');
  const base = parts[0] || '0';
  const decimals = parts[1];
  const hasDecimals = !hideDecimals && decimals !== undefined;

  return (
    <div
      data-slot="price"
      className={cn(priceVariants({ variant, size, alignment }), className)}
      {...props}
    >
      {!hideCurrency && (
        <span className={cn(priceCurrencyVariants({ variant, size }))}>
          {currency}
        </span>
      )}
      <span className={cn(priceBaseVariants({ variant, size }))}>
        {base}
      </span>
      {hasDecimals && (
        <span className={cn(priceDecimalsVariants({ variant, size }))}>
          .{decimals}
        </span>
      )}
    </div>
  );
}

export { UiPrice };
