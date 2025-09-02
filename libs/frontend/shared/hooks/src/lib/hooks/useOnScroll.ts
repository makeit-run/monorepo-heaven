"use client"

import { useEffect, useState } from "react"

interface ScrollPosition {
  x: number
  y: number
}

const useOnScroll = (
  elementRef: React.RefObject<HTMLElement>,
  onScrollCallback?: () => void
): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0
  })

  const handleScroll = () => {
    if (elementRef.current) {
      const { scrollLeft, scrollTop } = elementRef.current
      setScrollPosition({ x: scrollLeft, y: scrollTop })
    }
    onScrollCallback && onScrollCallback()
  }

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      element.addEventListener("scroll", handleScroll, { passive: true })

      return () => {
        element.removeEventListener("scroll", handleScroll)
      }
    }
  }, [elementRef])

  return scrollPosition
}
export { useOnScroll }
