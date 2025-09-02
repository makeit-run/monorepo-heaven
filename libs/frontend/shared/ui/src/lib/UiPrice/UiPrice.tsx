import { cn } from "@shared/utils/cn"
import numeral from "numeral"

import { UiText } from "../UiText/UiText"

interface UiPriceProps {
  value: number
  pattern?: string
  currency?: string
  className?: string
}
export const UiPrice = ({
  value,
  pattern,
  className,
  currency = "$"
}: UiPriceProps) => {
  const formattedString = numeral(value).format(pattern || "(0,0.00)")
  const base = formattedString.split(".")?.[0]
  const decimals = formattedString.split(".")?.[1]

  return (
    <div
      className={cn(
        "text-primary flex flex-nowrap items-start gap-0.5 py-2",
        className
      )}
    >
      <UiText className={"!leading-0 text-nowrap"} variant={"body3-medium"}>
        {currency}
      </UiText>
      <UiText className={"!text-nowrap !leading-[30px]"} variant={"h3"}>
        {base}
      </UiText>
      <UiText className={"!leading-0 text-nowrap"} variant={"body3-medium"}>
        {decimals}
      </UiText>
    </div>
  )
}
