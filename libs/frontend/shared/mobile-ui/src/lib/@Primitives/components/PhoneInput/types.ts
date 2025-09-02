import React from "react"
import { TextInput } from "react-native"
import CountryPicker from "react-native-country-picker-modal"
import { CountryFilterProps } from "react-native-country-picker-modal/lib/CountryFilter"
import {
  Country,
  CountryCode
} from "react-native-country-picker-modal/lib/types"

type PhoneInputChangeCountryHandler = (country: Country) => void

type PhoneInputChangeTextHandler = (text: string, isValid: boolean) => void
type PhoneInputChangeFormattedTextHandler = (
  text: string,
  isValid: boolean
) => void

const PhoneInputLayout = {
  FLAG: "flag",
  CODE: "code"
}

interface PhoneInputPrimitiveProps {
  defaultCode?: CountryCode
  defaultValue?: string
  value?: string
  placeholder?: string
  layout?: (typeof PhoneInputLayout)[keyof typeof PhoneInputLayout]
  flagSize?: number | undefined
  //
  disableArrowIcon?: boolean
  autoFocus?: boolean
  disabled?: boolean
  //
  onChangeCountry?: PhoneInputChangeCountryHandler
  onChangeText?: PhoneInputChangeTextHandler
  onChangeFormattedText?: PhoneInputChangeFormattedTextHandler
  //
  textInputStyle?: object
  textContainerStyle?: object
  codeTextStyle?: object
  flagButtonStyle?: object
  containerStyle?: object
  //
  textInputClassName?: string
  textContainerClassName?: string
  codeTextClassName?: string
  flagButtonClassName?: string
  containerClassName?: string
  //
  filterProps?: CountryFilterProps
  textInputProps?: React.ComponentProps<typeof TextInput>
  countryPickerProps?: React.ComponentProps<typeof CountryPicker>
}

export type {
  PhoneInputPrimitiveProps,
  PhoneInputChangeCountryHandler,
  PhoneInputChangeTextHandler,
  PhoneInputChangeFormattedTextHandler
}

export { PhoneInputLayout }
