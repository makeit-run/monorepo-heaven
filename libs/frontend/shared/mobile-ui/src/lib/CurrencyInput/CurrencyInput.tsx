import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CountryPicker, {
  CountryModalProvider,
} from 'react-native-country-picker-modal';
import { Country } from 'react-native-country-picker-modal/lib/types';
import type { VariantProps } from 'tailwind-variants';

import { currencyInputVariants } from './config';

const initialValue: Country = {
  callingCode: ['1'],
  cca2: 'US',
  currency: ['USD'],
  flag: 'flag-us',
  name: 'United States',
  region: 'Americas',
  subregion: 'North America',
};

interface CurrencyInputProps
  extends VariantProps<typeof currencyInputVariants> {
  defaultCountry?: Country;
  onSelect?: (country: Country) => void;
}

export function CurrencyInput({
  onSelect,
  variant,
  size,
  defaultCountry,
}: CurrencyInputProps) {
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
          <View className={currencyInputVariants({ variant, size })}>
            <CountryPicker
              onSelect={onSelectHandler}
              withCurrency
              withFilter
              countryCode={countryCode?.cca2}
              filterProps={{
                placeholder: 'Try country code to search currency...',
              }}
              // flatListProps={
              //   {
              //     renderItem: ({ item }: { item: Country }) => (
              //       <View key={item?.cca2} className={"flex-row p-4"}>
              //         <Text>{item?.name}</Text>
              //         <Text>{item.currency}</Text>
              //       </View>
              //     )
              //   } as any
              // }
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              withFlagButton={false}
              withFlag={false}
            />
            {countryCode?.currency?.length ? (
              <Text>{countryCode?.currency?.join(' | ')}</Text>
            ) : (
              <Text className={countryCode ? '' : 'text-black-300'}>
                {countryCode ? 'No currency found' : 'Select a currency'}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </CountryModalProvider>
  );
}
