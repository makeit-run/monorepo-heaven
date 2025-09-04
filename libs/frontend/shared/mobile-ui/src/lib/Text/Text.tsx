import { cn } from '@shared/utils/cn';
import * as Slot from '../@Primitives/components/Slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform, Text as RNText, type Role } from 'react-native';
import { textVariants } from './config';

// Create context for variant propagation
const TextContext = React.createContext<{
  variant?: VariantProps<typeof textVariants>['variant'];
  color?: VariantProps<typeof textVariants>['color'];
  weight?: VariantProps<typeof textVariants>['weight'];
  balance?: VariantProps<typeof textVariants>['balance'];
}>({ 
  variant: 'default', 
  color: 'default', 
  weight: 'default', 
  balance: 'default' 
});

type TextVariantProps = VariantProps<typeof textVariants>;

type TextVariant = NonNullable<TextVariantProps['variant']>;

const ROLE: Partial<Record<TextVariant, Role>> = {
  h1: 'heading',
  h2: 'heading',
  h3: 'heading',
  h4: 'heading',
  blockquote: Platform.select({ web: 'blockquote' as Role }),
  code: Platform.select({ web: 'code' as Role }),
};

const ARIA_LEVEL: Partial<Record<TextVariant, string>> = {
  h1: '1',
  h2: '2',
  h3: '3',
  h4: '4',
};

const TextClassContext = React.createContext<string | undefined>(undefined);

function Text({
  className,
  asChild = false,
  variant = 'default',
  color = 'default',
  weight = 'default',
  balance = 'default',
  children,
  ...props
}: React.ComponentProps<typeof RNText> &
  TextVariantProps &
  React.RefAttributes<RNText> & {
    asChild?: boolean;
  }) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;
  
  return (
    <TextContext.Provider value={{ variant, color, weight, balance }}>
      <Component
        className={cn(textVariants({ variant, color, weight, balance }), textClass, className)}
        role={variant ? ROLE[variant] : undefined}
        aria-level={variant ? ARIA_LEVEL[variant] : undefined}
        {...props}
      >
        {children}
      </Component>
    </TextContext.Provider>
  );
}

export { Text, TextClassContext, TextContext };
