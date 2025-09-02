"use client"

import { useState } from "react"

import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}
