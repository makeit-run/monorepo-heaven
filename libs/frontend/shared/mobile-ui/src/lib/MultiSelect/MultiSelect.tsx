import { cn } from "@shared/utils/cn"
import React, { useEffect, useRef, useState } from "react"
import {
  Animated,
  Easing,
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native"
import type { VariantProps } from "tailwind-variants"

import { multiSelectVariants } from "./config"
import { MultiSelectDefaultOption } from "./MultiSelectDefaultOption"

interface MultiSelectDropdownProps<T, K extends string | number>
  extends VariantProps<typeof multiSelectVariants> {
  options: T[]
  label: string
  value: K[]
  onChange: (selectedValues: K[]) => void
  getOptionLabel?: (option: T) => string
  getOptionValue?: (option: T) => K
  renderItem?: (props: {
    item: T
    isSelected: boolean
    onSelect: () => void
  }) => React.ReactElement
  containerClassName?: string
  labelClassName?: string
  selectContainerClassName?: string
  dropdownClassName?: string
  optionClassName?: string
  animationDuration?: number
  multiline?: boolean
}

export function MultiSelectDropdown<
  T extends { label?: string; value?: any },
  K extends string | number = string
>({
  options,
  label,
  value,
  onChange,
  getOptionLabel = (option: T) => (option.label as string) || String(option),
  getOptionValue = (option: T) => option.value as K,
  renderItem,
  containerClassName,
  labelClassName,
  selectContainerClassName,
  dropdownClassName,
  optionClassName,
  multiline,
  variant,
  size,
  animationDuration = 300
}: MultiSelectDropdownProps<T, K>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<K[]>(value || [])

  const containerRef = useRef<View>(null)
  const dropdownRef = useRef<View>(null)

  const dropdownAnimation = useRef(new Animated.Value(0)).current
  const dropdownOpacity = useRef(new Animated.Value(0)).current

  const { triggerLabel, triggerText, contentItem, trigger, content } =
    multiSelectVariants({ variant, size })

  const maxHeight = dropdownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 208] // 208px = max-h-52 in tailwind
  })

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  const closeDropdown = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  const handleOptionSelect = (optionValue: K) => {
    let updatedOptions: K[]
    if (selectedOptions.includes(optionValue)) {
      updatedOptions = selectedOptions.filter((item) => item !== optionValue)
    } else {
      updatedOptions = [...selectedOptions, optionValue]
    }
    setSelectedOptions(updatedOptions)
    onChange(updatedOptions)
  }

  const getSelectedLabels = () => {
    return selectedOptions
      .map((selectedValue) => {
        const option = options.find(
          (opt) => getOptionValue(opt) === selectedValue
        )
        return option ? getOptionLabel(option) : String(selectedValue)
      })
      .join(", ")
  }

  // Properly typed FlatList renderItem function
  const renderFlatListItem: ListRenderItem<T> = ({ item }) => {
    const optionValue = getOptionValue(item)
    const isSelected = selectedOptions.includes(optionValue)
    const onSelect = () => handleOptionSelect(optionValue)

    return renderItem
      ? renderItem({ item, isSelected, onSelect })
      : MultiSelectDefaultOption<T>({
          item,
          isSelected,
          onSelect,
          className: cn(contentItem(), optionClassName),
          getOptionLabel
        })
  }

  useEffect(() => {
    setSelectedOptions(value || [])
  }, [value])

  useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(dropdownAnimation, {
          toValue: 1,
          duration: animationDuration,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false
        }),
        Animated.timing(dropdownOpacity, {
          toValue: 1,
          duration: animationDuration * 0.8,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false
        })
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(dropdownAnimation, {
          toValue: 0,
          duration: animationDuration,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: false
        }),
        Animated.timing(dropdownOpacity, {
          toValue: 0,
          duration: animationDuration * 0.6,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: false
        })
      ]).start()
    }
  }, [isOpen])

  return (
    <View ref={containerRef} className={containerClassName}>
      {isOpen && (
        <TouchableWithoutFeedback onPress={closeDropdown}>
          <View
            className="size-screen absolute -inset-full z-10 size-full"
            style={{ width: 5000, height: 5000 }}
          />
        </TouchableWithoutFeedback>
      )}

      <Text className={cn(triggerLabel(), labelClassName)}>{label}</Text>
      <TouchableOpacity
        className={cn(trigger(), selectContainerClassName)}
        onPress={toggleDropdown}
      >
        <Text className={cn(triggerText(), !multiline && "line-clamp-1")}>
          {selectedOptions.length > 0 ? getSelectedLabels() : "Select options"}
        </Text>
      </TouchableOpacity>

      <Animated.View
        ref={dropdownRef}
        style={{
          maxHeight,
          opacity: dropdownOpacity,
          display: +maxHeight === 0 && !isOpen ? "none" : "flex",
          zIndex: 20
        }}
        className={cn(content(), dropdownClassName)}
      >
        <FlatList
          data={options}
          keyExtractor={(item) => String(getOptionValue(item))}
          renderItem={renderFlatListItem}
        />
      </Animated.View>
    </View>
  )
}
