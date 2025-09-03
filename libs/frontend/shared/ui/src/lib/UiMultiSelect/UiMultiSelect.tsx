'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/utils/cn';
import { UiBadge } from '../UiBadge';
import { UiCommand, UiCommandGroup, UiCommandItem } from '../UiCommand';
import {
  multiSelectVariants,
  multiSelectTriggerVariants,
  multiSelectInputVariants,
  multiSelectTagsVariants,
  multiSelectRemoveButtonVariants,
  multiSelectDropdownVariants,
  multiSelectContentVariants,
} from './config';

type ItemType = Record<'value' | 'label', string>;

export interface UiMultiSelectProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof multiSelectVariants>,
    VariantProps<typeof multiSelectTriggerVariants> {
  data: ItemType[] | null | undefined;
  selected?: ItemType[];
  onSelectionChange?: (selected: ItemType[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

function UiMultiSelect({
  className,
  variant,
  size,
  data,
  selected: controlledSelected,
  onSelectionChange,
  placeholder = 'Select items...',
  disabled = false,
  defaultValue,
  ...props
}: UiMultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [internalSelected, setInternalSelected] = React.useState<ItemType[]>(
    []
  );

  const selected = controlledSelected ?? internalSelected;
  const setSelected = onSelectionChange ?? setInternalSelected;

  const handleUnselect = React.useCallback(
    (item: ItemType) => {
      if (disabled) return;
      const newSelected = selected.filter((s) => s.value !== item.value);
      setSelected(newSelected);
    },
    [disabled, selected, setSelected]
  );

  const handleSelect = React.useCallback(
    (item: ItemType) => {
      if (disabled) return;
      const newSelected = [...selected, item];
      setSelected(newSelected);
      setOpen(false);
    },
    [disabled, selected, setSelected]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '' && selected.length > 0) {
            const newSelected = [...selected];
            newSelected.pop();
            setSelected(newSelected);
          }
        }
        if (e.key === 'Escape') {
          input.blur();
          setOpen(false);
        }
      }
    },
    [disabled, selected, setSelected]
  );

  const selectables = data?.filter(
    (item) => !selected.some((s) => s.value === item.value)
  );

  return (
    <UiCommand
      defaultValue={defaultValue?.toString()}
      data-slot="multi-select"
      onKeyDown={handleKeyDown}
      className={cn(multiSelectVariants({ variant }), className)}
      {...props}
    >
      <div
        className={cn(
          multiSelectTriggerVariants({ variant, size }),
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <input
          ref={inputRef}
          readOnly
          disabled={disabled}
          placeholder={selected.length === 0 ? placeholder : ''}
          onBlur={() => setOpen(false)}
          onFocus={() => !disabled && setOpen(true)}
          className={cn(multiSelectInputVariants({ variant }))}
        />
        <div className={cn(multiSelectTagsVariants({ variant }))}>
          {selected.map((item) => (
            <UiBadge key={item.value} variant="secondary" className="z-[1]">
              {item.label}
              <button
                type="button"
                disabled={disabled}
                className={cn(multiSelectRemoveButtonVariants({ variant }))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleUnselect(item);
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={() => handleUnselect(item)}
              >
                <X className="size-3 text-muted-foreground hover:text-foreground" />
              </button>
            </UiBadge>
          ))}
        </div>
      </div>
      <div className={cn(multiSelectContentVariants({ variant }))}>
        {open && selectables && selectables.length > 0 && (
          <div className={cn(multiSelectDropdownVariants({ variant }))}>
            <UiCommandGroup className="h-full max-h-64 overflow-auto">
              {selectables.map((item) => (
                <UiCommandItem
                  key={item.value}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onSelect={() => handleSelect(item)}
                  className="cursor-pointer"
                >
                  {item.label}
                </UiCommandItem>
              ))}
            </UiCommandGroup>
          </div>
        )}
      </div>
    </UiCommand>
  );
}

export { UiMultiSelect };
