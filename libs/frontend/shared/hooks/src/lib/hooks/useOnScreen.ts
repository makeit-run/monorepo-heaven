"use client"

import { useEffect, useState } from "react"

export function useOnScreen(ref: any, options?: IntersectionObserverInit) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIntersecting(entry.isIntersecting)
        }
      },
      { threshold: 1, ...options }
    )

    if (ref?.current) {
      observer.observe(ref?.current)
    }
    // return () => {
    //   observer.unobserve(ref.current);
    // };
  }, []) // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting
}
