'use client';

import { cn } from '@shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import { ChevronDown, X } from 'lucide-react';
import {
  ComponentProps,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { useClickOutside } from '@frontend/shared/hooks/hooks/useClickOutside';

import { getValueByPath } from '../../../helpers/autocomplete';
import {
  UiCommand,
  UiCommandInput,
  UiCommandInputProps,
  UiCommandItem,
  UiCommandList,
} from '../UiCommand';
import { UiLabel } from '../UiLabel';
import { autocompleteInputStyles } from './config';

interface UiAutocompleteInputProps
  extends Omit<UiCommandInputProps, 'size'>,
    VariantProps<typeof autocompleteInputStyles> {
  label?: string;
  error?: string;
  isListOpen?: boolean;
  withoutClearIcon?: boolean;
}

export interface UiAutocompleteProps extends UiAutocompleteInputProps {
  // commandProps?: ComponentProps<typeof UiCommand>
  // inputProps?: ComponentProps<typeof UiCommandInput>
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeIsOpen: (value: boolean) => void;
  onCloseCallback: () => void;
  options: any[];
  onSelect: (value: any) => void;
  isOpen: boolean;
  isLoading?: boolean;
  customBody?: ReactNode;
  optionKey?: string | string[];
  shouldFilter?: boolean;
  listClassName?: string;
}

function UiAutocomplete({
  // commandProps,
  // commandListProps,
  // inputProps,
  search,
  onChangeSearch,
  isLoading,
  isOpen,
  onChangeIsOpen,
  onCloseCallback,
  options,
  onSelect,
  customBody,
  value,
  size,
  listClassName,
  optionKey = '',
  shouldFilter = false,
  ...rest
}: UiAutocompleteProps) {
  const [open, setOpen] = useState<boolean>(false);
  const $container = useRef<HTMLDivElement>(null);
  const clickOutside = useClickOutside($container);
  const mainOpen = typeof isOpen === 'boolean' ? isOpen : open;

  const onOpenList = () => {
    setOpen(true);
    onChangeIsOpen(true);
  };

  const onCloseList = () => {
    setOpen(false);
    onChangeIsOpen(false);
  };

  const onValueChange = (value: string) => {
    onChangeSearch(value);

    if (!mainOpen) {
      onOpenList();
    }
  };

  const onClearText = () => {
    onChangeSearch('');
  };

  const onSelectHandler = (value: string) => {
    onSelect(value);
    onCloseList();
  };

  useEffect(() => {
    if (clickOutside) {
      onCloseList();
      onCloseCallback();
    }
  }, [clickOutside]);

  return (
    <UiCommand
      ref={$container}
      className={'font-roboto relative inline-block w-full overflow-visible'}
      shouldFilter={shouldFilter}
    >
      <UiAutocompleteInput
        isLoading={isLoading}
        value={search}
        onValueChange={onValueChange}
        onFocus={onOpenList}
        onClearText={onClearText}
        isListOpen={mainOpen}
        {...rest}
      />
      {mainOpen && !isLoading && options?.length > 0 && (
        <UiCommandList
          className={cn(
            'shadow-input absolute top-full z-10 mt-2 w-full rounded-xl border border-black/30 bg-white',
            listClassName
          )}
        >
          {customBody
            ? customBody
            : options?.map((option: any, index) => (
                <UiAutocompleteItem
                  key={index}
                  onSelect={onSelectHandler}
                  optionKey={optionKey}
                  option={option}
                />
              ))}
        </UiCommandList>
      )}
    </UiCommand>
  );
}

function UiAutocompleteInput({
  label,
  size,
  className,
  error,
  onClearText,
  isListOpen,
  withoutClearIcon,
  isLoading,
  ...rest
}: UiAutocompleteInputProps & {
  onClearText?: () => void;
  isLoading?: boolean;
}) {
  const id = useId();
  return (
    <div>
      {!label && (
        <UiLabel className="sr-only" htmlFor={id}>
          {id}
        </UiLabel>
      )}
      {label && <UiLabel htmlFor={id}>{label}</UiLabel>}
      <UiCommandInput
        isLoading={isLoading}
        id={id}
        className={cn(
          autocompleteInputStyles({ size }),
          { 'border-red-500': error },
          'pr-16',
          className
        )}
        icon={
          <>
            {!withoutClearIcon && (
              <button
                type={'button'}
                className={cn(
                  'group absolute right-10 top-1/2 flex size-6 -translate-y-2/4 items-center justify-center opacity-0 transition duration-500',
                  { 'opacity-100': rest?.value }
                )}
                onClick={onClearText}
              >
                <X className={'text-primary group-hover:text-secondary'} />
              </button>
            )}
            <ChevronDown
              className={cn(
                'text-primary absolute right-4 size-5 transition duration-500',
                { 'rotate-180': isListOpen }
              )}
            />
          </>
        }
        {...rest}
      />
      {/*{error && <p className="px-1 pt-1.5 text-xs text-red-600">{error}</p>}*/}
    </div>
  );
}

function UiAutocompleteItem({
  option,
  optionKey,
  isActive,
  onSelect,
  ...rest
}: ComponentProps<typeof UiCommandItem> & {
  option: any;
  optionKey: string | string[];
  isActive?: boolean;
}) {
  let displayName = option;

  if (typeof option === 'object') {
    displayName = getValueByPath(option, optionKey);
  }

  if (!displayName) return null;

  const onSelectHandler = () => {
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <UiCommandItem
      className={cn(
        'px-4 text-black',
        { 'bg-secondary-light': isActive },
        rest?.className
      )}
      onSelect={onSelectHandler}
      {...rest}
    >
      {displayName}
    </UiCommandItem>
  );
}

export { UiAutocomplete, UiAutocompleteItem, type UiAutocompleteInputProps };
