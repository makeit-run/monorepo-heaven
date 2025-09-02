"use client"

import { NavigateOptions } from "next/dist/shared/app-router-context.shared-runtime"
import { useRouter } from "next/navigation"
import { useEffect, useState, useTransition } from "react"

interface LazyRouterInstance {
  lazyBack(tag?: string): void
  lazyRefresh(tag?: string): void
  lazyPush(href: string, options?: NavigateOptions, tag?: string): void
  lazyReplace(href: string, options?: NavigateOptions, tag?: string): void
  isPending: boolean
  isPendingTag: string | null
}

export function useLazyRouterWithTag(): LazyRouterInstance {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const lazyPush = (
    href: string,
    options?: NavigateOptions,
    tag?: string
  ): void => {
    if (tag) setActiveTag(tag)
    startTransition(() => {
      router.push(href, options)
    })
  }

  const lazyReplace = (
    href: string,
    options?: NavigateOptions,
    tag?: string
  ): void => {
    if (tag) setActiveTag(tag)
    startTransition(() => {
      router.replace(href, options)
    })
  }

  const lazyBack = (tag?: string): void => {
    if (tag) setActiveTag(tag)
    startTransition(() => {
      router.back()
    })
  }

  const lazyRefresh = (tag?: string): void => {
    if (tag) setActiveTag(tag)
    startTransition(() => {
      router.refresh()
    })
  }

  useEffect(() => {
    if (!isPending) {
      setActiveTag(null)
    }
  }, [isPending])

  return {
    lazyPush,
    lazyReplace,
    lazyBack,
    lazyRefresh,
    isPending,
    isPendingTag: activeTag
  }
}
