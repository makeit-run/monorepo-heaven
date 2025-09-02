"use client"

import { cn } from "@shared/utils/cn"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"
import * as React from "react"

const UiInputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
UiInputOTP.displayName = "InputOTP"

const UiInputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
UiInputOTPGroup.displayName = "InputOTPGroup"

const UiInputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number; error?: boolean }
>(({ index, className, error, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "flexible-text-[3rem] text-text-700 relative flex size-24 items-center justify-center rounded-lg border border-gray-300 transition-all",
        (isActive || char) && "ring-ring ring-offset-primary z-10 ring-2",
        !char && error && "z-10 ring-2 ring-red-500 ring-offset-0",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-primary h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
})
UiInputOTPSlot.displayName = "InputOTPSlot"

const UiInputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
UiInputOTPSeparator.displayName = "InputOTPSeparator"

export { UiInputOTP, UiInputOTPGroup, UiInputOTPSlot, UiInputOTPSeparator }
