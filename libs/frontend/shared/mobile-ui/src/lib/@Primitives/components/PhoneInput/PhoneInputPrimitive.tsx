import { PhoneNumberUtil } from "google-libphonenumber"
import { ChevronDown } from "lucide-react-native"
import React, { useEffect, useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import CountryPicker, {
  CountryModalProvider,
  Flag,
  getCallingCode
} from "react-native-country-picker-modal"
import {
  Country,
  CountryCode
} from "react-native-country-picker-modal/lib/types"

import { LucideIcon } from "@frontend/shared/mobile-ui/LucideIcon"

import styles from "./styles"
import { PhoneInputLayout, type PhoneInputPrimitiveProps } from "./types"

const phoneUtil = PhoneNumberUtil.getInstance()

export const PhoneInputPrimitive = ({
  value,
  autoFocus,
  placeholder,
  disableArrowIcon,
  disabled,
  //
  onChangeFormattedText,
  onChangeCountry,
  onChangeText,
  //
  textInputProps,
  countryPickerProps,
  filterProps,
  //
  containerStyle,
  flagButtonStyle,
  textContainerStyle,
  codeTextStyle,
  textInputStyle,
  //
  containerClassName,
  flagButtonClassName,
  textContainerClassName,
  codeTextClassName,
  textInputClassName,
  //
  flagSize = 28,
  layout = PhoneInputLayout.CODE,
  defaultCode = "US",
  defaultValue = ""
}: PhoneInputPrimitiveProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [code, setCode] = useState(defaultCode ? undefined : "91")
  const [number, setNumber] = useState(value || defaultValue || "")
  const [countryCode, setCountryCode] = useState<CountryCode>(defaultCode)
  const [isDisabled, setIsDisabled] = useState(disabled)

  const isValidNumber = (number?: string, region?: string) => {
    try {
      const parsedNumber = phoneUtil.parse(number, region)
      return phoneUtil.isValidNumber(parsedNumber)
    } catch (err) {
      return false
    }
  }

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCode(country.callingCode[0])

    if (onChangeFormattedText) {
      if (country.callingCode[0]) {
        onChangeFormattedText(
          `+${country.callingCode[0]}${number}`,
          isValidNumber(number, country.cca2)
        )
      } else {
        onChangeFormattedText(number, isValidNumber(number, country.cca2))
      }
    }

    if (onChangeCountry) {
      onChangeCountry(country)
    }
  }

  const handleChangeText = (text: string) => {
    setNumber(text)

    if (onChangeText) {
      onChangeText(text, isValidNumber(text, countryCode))
    }

    if (onChangeFormattedText) {
      if (code) {
        const formattedText = text.length > 0 ? `+${code}${text}` : text
        onChangeFormattedText(formattedText, isValidNumber(text, countryCode))
      } else {
        onChangeFormattedText(text, isValidNumber(text, countryCode))
      }
    }
  }

  useEffect(() => {
    const fetchCallingCode = async () => {
      if (defaultCode) {
        const code = await getCallingCode("US")
        setCode(code)
      }
    }

    void fetchCallingCode()
  }, [defaultCode])

  useEffect(() => {
    setIsDisabled(disabled)
    if ((value || value === "") && value !== number) {
      setNumber(value)
    }
  }, [disabled, number, value])

  const renderFlagButton = () => {
    if (layout === PhoneInputLayout.FLAG) {
      return <Flag countryCode={countryCode} flagSize={flagSize} />
    }
    return <View />
  }

  return (
    <CountryModalProvider>
      <View
        style={[styles.container, containerStyle || {}]}
        className={containerClassName}
      >
        <TouchableOpacity
          style={[
            styles.flagButtonView,
            layout === PhoneInputLayout.CODE ? styles.flagButtonExtraWidth : {},
            flagButtonStyle || {}
          ]}
          className={flagButtonClassName}
          disabled={isDisabled}
          onPress={() => setModalVisible(true)}
        >
          <CountryPicker
            onSelect={onSelect}
            withEmoji
            withFilter
            withFlag
            filterProps={filterProps}
            countryCode={countryCode}
            withCallingCode
            disableNativeModal={isDisabled}
            visible={modalVisible}
            renderFlagButton={renderFlagButton}
            onClose={() => setModalVisible(false)}
            {...countryPickerProps}
          />
          {code && layout === PhoneInputLayout.CODE && (
            <Text
              style={codeTextStyle}
              className={codeTextClassName}
            >{`+${code}`}</Text>
          )}
          {!disableArrowIcon && (
            <View>
              <LucideIcon style={styles.dropDownImage} icon={ChevronDown} />
            </View>
          )}
        </TouchableOpacity>
        <View
          style={[styles.textContainer, textContainerStyle || {}]}
          className={textContainerClassName}
        >
          {code && layout === PhoneInputLayout.FLAG && (
            <Text
              style={codeTextStyle}
              className={codeTextClassName}
            >{`+${code}`}</Text>
          )}
          <TextInput
            style={[styles.numberText, textInputStyle || {}]}
            className={textInputClassName}
            placeholder={placeholder || "*********"}
            onChangeText={handleChangeText}
            value={number}
            editable={!isDisabled}
            selectionColor="black"
            keyboardAppearance={"default"}
            keyboardType="number-pad"
            autoFocus={autoFocus}
            {...textInputProps}
          />
        </View>
      </View>
    </CountryModalProvider>
  )
}

export default PhoneInputPrimitive
