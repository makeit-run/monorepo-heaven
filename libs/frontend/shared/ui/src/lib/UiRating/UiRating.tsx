"use client"

import { cn } from "@shared/utils/cn"
import React from "react"

import { UiText } from "../UiText"

export type RatingVariant = "full" | "short"

interface UiRatingProps {
  onChange?: (value: number) => void
  value: number | string
  reviewsCount?: string | number
  wrapperStyles?: string
  starsWrapperStyles?: string
  textStyles?: string
  variant?: RatingVariant
}

const Start = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696z"
      fill="inherit"
      stroke="inherit"
    />
  </svg>
)
export const UiRating = React.forwardRef<HTMLDivElement, UiRatingProps>(
  (
    {
      value = 0,
      onChange,
      wrapperStyles,
      reviewsCount,
      starsWrapperStyles,
      textStyles,
      variant = "short"
    },
    ref
  ) => {
    if (variant === "short") {
      return (
        <div className={"flex items-center justify-center gap-1"}>
          <Start className={"fill-[#FFB906]"} />
          <div>
            <UiText className={"font-medium"} variant={"body3-medium"}>
              {Number(value).toFixed(1)}
            </UiText>
          </div>
        </div>
      )
    }

    return (
      <div className={cn("flex flex-col items-center gap-2", wrapperStyles)}>
        <div
          className={cn(
            `flex flex-row-reverse items-center gap-2 hover:cursor-default`,
            starsWrapperStyles,
            onChange &&
              "hover:cursor-pointer [&_button:hover_svg]:fill-[#FFB906] [&_button:hover_~_button_svg]:fill-[#FFB906]"
          )}
        >
          {[5, 4, 3, 2, 1].map((item, index) => (
            <button
              key={item}
              type={"button"}
              onClick={() => onChange && onChange(item)}
            >
              <Start
                className={cn(`fill-transparent stroke-[#FFB906]`, {
                  "fill-[#FFB906]": item <= +value
                })}
              />
            </button>
          ))}
        </div>

        {reviewsCount && (
          <UiText className={textStyles} variant={"body3-medium"}>
            ({reviewsCount} reviews)
          </UiText>
        )}
      </div>
    )
  }
)
UiRating.displayName = "UiRating"
