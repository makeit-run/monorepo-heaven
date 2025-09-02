export interface OtpInputProps {
  numberOfDigits?: number
  autoFocus?: boolean
  onTextChange?: (text: string) => void
  onFilled?: (text: string) => void
  onFocus?: () => void
  onBlur?: () => void
  blurOnFilled?: boolean
  hideStick?: boolean
  focusStickBlinkingDuration?: number
  secureTextEntry?: boolean
  disabled?: boolean
  type?: "alpha" | "numeric" | "alphanumeric"
  placeholder?: string
  error?: string
}

export interface OtpInputRef {
  clear: () => void
  focus: () => void
  setValue: (value: string) => void
}
