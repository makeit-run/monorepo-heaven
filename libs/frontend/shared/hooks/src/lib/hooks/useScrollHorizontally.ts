"use client"

import { useDrag } from "@use-gesture/react"
import { DependencyList, RefObject, useEffect, useRef, useState } from "react"

import { useMediaQuery } from "./useMediaQuery"

export interface useScrollHorizontallyProps {
  dependency: DependencyList
  parentRef: RefObject<HTMLElement>
  childrenRef: RefObject<HTMLElement>
}

let scrollWidth = 0

export function useScrollHorizontally({
  dependency,
  parentRef,
  childrenRef
}: useScrollHorizontallyProps) {
  const smallerThanMd = useMediaQuery("(max-width: 900px)")
  const smallerThanSm = useMediaQuery("(max-width: 1024px)")
  const [scrollLeft, setScrollLeft] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [minLeft, setMinLeft] = useState(0)

  useEffect(() => {
    setMinLeft(
      (parentRef?.current?.clientWidth || 0) -
        (childrenRef.current?.clientWidth || 0)
    )
  }, [dependency, parentRef, childrenRef])

  // Calculate scrollWidth when categories set
  useEffect(() => {
    if (childrenRef.current && childrenRef.current.children.length > 0) {
      const items = childrenRef.current
        .children as HTMLCollectionOf<HTMLElement>
      const itemWidth = items[0].offsetWidth

      const totalItemsWidth = itemWidth * items.length
      const gap =
        items.length > 1
          ? (childrenRef.current.offsetWidth - totalItemsWidth) /
            (items.length - 1)
          : (childrenRef.current.offsetWidth - totalItemsWidth) / items.length

      scrollWidth = itemWidth + gap
      setScrollLeft(
        (scrollLeft) => Math.ceil(scrollLeft / scrollWidth) * scrollWidth
      )
    }
  }, [childrenRef, dependency, smallerThanMd, smallerThanSm])

  function scrollToLeft() {
    let newLeft = scrollLeft + scrollWidth
    if (newLeft > -scrollWidth / 2) newLeft = 0
    setScrollLeft(newLeft)
  }

  function scrollToStart() {
    setScrollLeft(0)
  }

  function scrollToRight() {
    let newLeft = scrollLeft - scrollWidth
    if (newLeft < minLeft + scrollWidth / 2) newLeft = minLeft

    setScrollLeft(newLeft)
  }

  useEffect(() => {
    setShowLeftArrow(scrollLeft < 0)
    setShowRightArrow(scrollLeft > minLeft)
  }, [scrollLeft, minLeft])

  const startPosition = useRef(0)
  const panStarted = useRef(false)

  const bind = useDrag(
    (state) => {
      if (state.down) {
        if (state.first) {
          startPosition.current = state.movement[0] - scrollLeft
        }
        panStarted.current = true

        let newScrollLeft = state.movement[0] - startPosition.current
        const min = minLeft

        // Implement rubber banding
        if (newScrollLeft < min) {
          newScrollLeft =
            min -
            (1.0 - 1.0 / (((min - newScrollLeft) * 0.55) / 100 + 1.0)) * 100
        } else if (newScrollLeft > 0) {
          newScrollLeft =
            (1.0 - 1.0 / ((newScrollLeft * 0.55) / 100 + 1.0)) * 100
        }
        setScrollLeft(newScrollLeft)
      } else {
        // Snap to nearest partner
        panStarted.current = false
        setScrollLeft((scrollLeft) => {
          const func = state.movement[0] > 0 ? Math.ceil : Math.floor

          const newScrollLeft = func(scrollLeft / scrollWidth) * scrollWidth

          return Math.max(minLeft, Math.min(0, newScrollLeft))
        })
      }
    },
    { axis: "x", enabled: smallerThanSm }
  )
  return {
    bind,
    panStarted,
    scrollLeft,
    showLeftArrow,
    scrollToLeft,
    showRightArrow,
    scrollToRight,
    scrollToStart
  }
}
