"use client"

import { useCallback, useState } from "react"

import { useHasMounted } from "./useHasMounted"
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

export function useWindowWidth() {
  const hasMounted = useHasMounted()

  const [width, setWidth] = useState<number>(0)

  const handleResize = useCallback(() => {
    if (!hasMounted) return
    setWidth(window.innerWidth)
  }, [hasMounted])

  useIsomorphicLayoutEffect(() => {
    if (hasMounted) {
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [hasMounted, handleResize])

  return width
}
