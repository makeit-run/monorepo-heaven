import { useEffect, useRef } from "react"

export const useDebounceFn = (callback: any, delay: number) => {
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const debouncedCallback = (...args: any) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    // @ts-ignore
    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }

  return debouncedCallback
}
