"use client"

import {
  DependencyList,
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect
} from "react"

interface UseLoadOnScrollProps {
  observerCallback: () => void
  childrenRef: RefObject<HTMLElement | null>
  observer: MutableRefObject<IntersectionObserver | null>
  dependency?: DependencyList
  options?: IntersectionObserverInit
}

export function useLoadOnScroll({
  dependency,
  childrenRef,
  observerCallback,
  observer,
  options
}: UseLoadOnScrollProps) {
  const onLoadData = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        observerCallback()
      }
    },
    [observerCallback]
  )

  useEffect(() => {
    if (observer?.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(onLoadData, options)
    if (childrenRef.current) {
      observer?.current.observe(childrenRef.current)
    }
    return () => observer?.current?.disconnect()
  }, [childrenRef, onLoadData, dependency, observer])
}
