"use client"

import { RefObject, useEffect, useState } from "react"

export function useClickOutside(ref: RefObject<HTMLElement | null>): boolean {
  const [clickedOutside, setClickedOutside] = useState<boolean>(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setClickedOutside(true)
      } else {
        setClickedOutside(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  return clickedOutside
}
