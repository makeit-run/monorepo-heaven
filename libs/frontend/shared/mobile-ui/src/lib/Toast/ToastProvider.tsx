import * as React from "react"
import { Animated } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { getErrorMessage } from "@frontend/shared/mobile-ui/Toast/helpers"

import { Portal } from "../@Primitives/components/Portal"
import { Toast } from "./Toast"

type ToastVariant = "success" | "error" | "info" | "warning" | "gray"
type HandleError = (err?: unknown, params?: ToastParams) => void

interface ToastParams {
  variant?: ToastVariant
  title?: string
  description?: string
  duration?: number
  actionLabel?: string
  onAction?: () => void
  showClose?: boolean
  titleClassName?: string
  descriptionClassName?: string
  actionClassName?: string
  closeClassName?: string
}

type ToastContextType = {
  open: boolean
  variant?: ToastVariant
  title?: string
  description?: string
  duration?: number
  actionLabel?: string
  onAction?: () => void
  showClose?: boolean
  titleClassName?: string
  descriptionClassName?: string
  actionClassName?: string
  closeClassName?: string
  showToast: (params: ToastParams) => void
  handleError: HandleError
  hideToast: () => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [toastProps, setToastProps] = React.useState<ToastParams>({})

  // Use a ref to track if a toast is already showing
  const isShowingToast = React.useRef(false)
  const insets = useSafeAreaInsets()

  // Animation value
  const slideAnim = React.useRef(new Animated.Value(100)).current
  const opacityAnim = React.useRef(new Animated.Value(0)).current

  const animateIn = React.useCallback(() => {
    // Reset animation values
    slideAnim.setValue(100)
    opacityAnim.setValue(0)

    // Start animation
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      })
    ]).start()
  }, [slideAnim, opacityAnim])

  const animateOut = React.useCallback(
    (callback: () => void) => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 100,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        })
      ]).start(callback)
    },
    [slideAnim, opacityAnim]
  )

  const showToast = React.useCallback(
    (params: ToastParams) => {
      // Only update if we're not already showing a toast or if we're showing a different toast
      if (
        !isShowingToast.current ||
        JSON.stringify(toastProps) !== JSON.stringify(params)
      ) {
        setToastProps(params)
        setOpen(true)
        isShowingToast.current = true
        animateIn()
      }
    },
    [toastProps, animateIn]
  )

  const handleError: HandleError = React.useCallback(
    (err, params) => {
      const errorParams: ToastParams = {
        title: getErrorMessage(err),
        ...params
      }

      // Only update if we're not already showing a toast or if we're showing a different toast
      if (
        !isShowingToast.current ||
        JSON.stringify(toastProps) !== JSON.stringify(errorParams)
      ) {
        setToastProps(errorParams)
        setOpen(true)
        isShowingToast.current = true
        animateIn()
      }
    },
    [toastProps, animateIn]
  )

  const hideToast = React.useCallback(() => {
    animateOut(() => {
      setOpen(false)
      isShowingToast.current = false
    })
  }, [animateOut])

  // Auto-hide toast after duration
  React.useEffect(() => {
    if (open && toastProps.duration) {
      const timer = setTimeout(() => {
        hideToast()
      }, toastProps.duration)

      return () => clearTimeout(timer)
    }
  }, [open, toastProps.duration, hideToast])

  return (
    <ToastContext.Provider
      value={{
        open,
        ...toastProps,
        showToast,
        hideToast,
        handleError
      }}
    >
      {children}
      {open && (
        <Portal name="toast">
          <Animated.View
            style={{
              bottom: insets.bottom + 16,
              transform: [{ translateY: slideAnim }],
              opacity: opacityAnim
            }}
            className="absolute w-full px-4"
          >
            <Toast
              open={open}
              onOpenChange={hideToast}
              variant={toastProps.variant}
              title={toastProps.title}
              description={toastProps.description}
              actionLabel={toastProps.actionLabel}
              onAction={toastProps.onAction}
              showClose={toastProps.showClose}
              titleClassName={toastProps.titleClassName}
              descriptionClassName={toastProps.descriptionClassName}
              actionClassName={toastProps.actionClassName}
              closeClassName={toastProps.closeClassName}
            />
          </Animated.View>
        </Portal>
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
