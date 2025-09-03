import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import { textareaVariants } from './config';
function UiTextarea({ 
  className, 
  variant = 'default',
  ...props 
}: React.ComponentProps<'textarea'> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ variant }), className)}
      {...props}
    />
  );
}

export { UiTextarea };
