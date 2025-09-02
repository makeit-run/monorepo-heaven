import { defaultCountries, parseCountry } from "react-international-phone"

const topCountries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country)
  return ["us"].includes(iso2)
})

const restCountries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country)
  return !["us"].includes(iso2)
})

export const defaultPhoneCountries = [
  ...topCountries.reverse(),
  ...restCountries
]
