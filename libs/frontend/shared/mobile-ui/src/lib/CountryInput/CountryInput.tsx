import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CountryPicker, {
  CountryModalProvider,
} from 'react-native-country-picker-modal';
import { Country } from 'react-native-country-picker-modal/lib/types';
import type { VariantProps } from 'tailwind-variants';

import { countryInputVariants } from './config';

const initialValue: Country = {
  callingCode: ['1'],
  cca2: 'US',
  currency: ['USD'],
  flag: 'flag-us',
  name: 'United States',
  region: 'Americas',
  subregion: 'North America',
};

interface CountryInputProps extends VariantProps<typeof countryInputVariants> {
  defaultCountry?: Country;
  onSelect?: (country: Country) => void;
}

export function CountryInput({
  onSelect,
  variant,
  size,
  defaultCountry,
}: CountryInputProps) {
  const [countryCode, setCountryCode] = useState<Country>(
    defaultCountry || initialValue
  );
  const [modalVisible, setModalVisible] = useState(false);

  const onSelectHandler = (country: Country) => {
    setCountryCode(country);
    onSelect?.(country);
  };

  return (
    <CountryModalProvider>
      <View className={'flex-row'}>
        <TouchableOpacity
          className={'h-full flex-row items-center justify-center'}
          onPress={() => setModalVisible(true)}
        >
          <View className={countryInputVariants({ variant, size })}>
            <CountryPicker
              onSelect={onSelectHandler}
              withEmoji
              withFilter
              withFlag
              countryCode={countryCode?.cca2}
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
            />
            {typeof countryCode?.name === 'string' ? (
              <Text>{countryCode?.name}</Text>
            ) : (
              <Text className={'text-black-300'}>Placeholder</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </CountryModalProvider>
  );
}
