import { cn } from '@shared/utils/cn';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'lucide-react-native';
import { View } from 'react-native';
import { type VariantProps } from 'tailwind-variants';

import * as ToastPrimitive from '../@Primitives/components/Toast/ToastPrimitive';
import { LucideIcon } from '../LucideIcon';
import { Text, TextClassContext } from '../Text';
import {
  toastActionVariants,
  toastDescriptionVariants,
  toastTitleVariants,
  toastVariants,
} from './config';

export type ToastVariant = VariantProps<typeof toastVariants>['variant'];

export interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant?: ToastVariant;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  showClose?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
  actionClassName?: string;
  closeClassName?: string;
}

const getToastIcon = (variant?: ToastVariant) => {
  switch (variant) {
    case 'success':
      return CheckCircle;
    case 'error':
      return AlertCircle;
    case 'warning':
      return AlertTriangle;
    case 'info':
    case 'gray':
    default:
      return Info;
  }
};

export function Toast({
  open,
  onOpenChange,
  variant,
  title,
  description,
  actionLabel,
  onAction,
  showClose = true,
  titleClassName,
  descriptionClassName,
  actionClassName,
  closeClassName,
}: ToastProps) {
  const ToastIcon = getToastIcon(variant);
  return (
    <ToastPrimitive.Root
      type="foreground"
      open={open}
      onOpenChange={onOpenChange}
      className={cn(toastVariants({ variant }))}
    >
      <View className="mr-2 flex-1 flex-row items-center gap-1.5">
        <View className="mr-2">
          <LucideIcon
            icon={ToastIcon}
            className={cn(
              'size-5',
              variant === 'warning' ? 'text-black' : 'text-white'
            )}
          />
        </View>
        <View className="flex-1">
          {title && (
            <TextClassContext.Provider value={toastTitleVariants({ variant })}>
              <ToastPrimitive.Title>
                <Text className={cn(titleClassName)}>{title}</Text>
              </ToastPrimitive.Title>
            </TextClassContext.Provider>
          )}
          {description && (
            <TextClassContext.Provider
              value={toastDescriptionVariants({
                variant,
              })}
            >
              <ToastPrimitive.Description>
                <Text className={cn(descriptionClassName)}>{description}</Text>
              </ToastPrimitive.Description>
            </TextClassContext.Provider>
          )}
        </View>
      </View>
      <View className="gap-2">
        {actionLabel && (
          <TextClassContext.Provider value={toastActionVariants({ variant })}>
            <ToastPrimitive.Action
              className={cn(actionClassName)}
              onPress={onAction}
            >
              <Text>{actionLabel}</Text>
            </ToastPrimitive.Action>
          </TextClassContext.Provider>
        )}
        {showClose && (
          <ToastPrimitive.Close className={cn('p-1', closeClassName)}>
            <LucideIcon
              icon={X}
              className={cn(
                'size-5',
                variant === 'warning' ? 'text-black' : 'text-white'
              )}
            />
          </ToastPrimitive.Close>
        )}
      </View>
    </ToastPrimitive.Root>
  );
}
