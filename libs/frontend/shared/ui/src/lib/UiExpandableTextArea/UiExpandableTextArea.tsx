'use client';

import * as React from 'react';
import { useId } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import { UiLabel } from '../UiLabel';
import { expandableTextAreaVariants } from './config';

export interface UiExpandableTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof expandableTextAreaVariants> {
  label?: string;
  error?: string;
}

const UiExpandableTextArea = React.forwardRef<
  HTMLTextAreaElement,
  UiExpandableTextAreaProps
>(({ className, variant, label, error, id, ...props }, ref) => {
  const reactId = useId();
  const idGenerated = id ? id : reactId;
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const adjustHeight = React.useCallback(() => {
    const textarea = textareaRef.current || (ref as React.RefObject<HTMLTextAreaElement>)?.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [ref]);

  React.useEffect(() => {
    adjustHeight();
  }, [adjustHeight, props.value]);

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    props.onInput?.(e);
  };

  return (
    <>
      {label && <UiLabel htmlFor={idGenerated}>{label}</UiLabel>}
      <textarea
        data-slot="expandable-textarea"
        name={id}
        id={idGenerated}
        className={cn(expandableTextAreaVariants({ variant }), { 'border-red-500': error }, className)}
        ref={ref || textareaRef}
        onInput={handleInput}
        {...props}
      />
      <div className="mt-[1.5] min-h-6 text-xs text-red-600">{error}</div>
    </>
  );
});

UiExpandableTextArea.displayName = 'UiExpandableTextArea';

export { UiExpandableTextArea };
