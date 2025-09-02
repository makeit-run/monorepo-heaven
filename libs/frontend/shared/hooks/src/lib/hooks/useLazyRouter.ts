"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime"

interface LazyRouterInstance {
  lazyBack(): void
  lazyRefresh(): void
  lazyPush(href: string, options?: NavigateOptions): void
  lazyReplace(href: string, options?: NavigateOptions): void
  isPending: boolean
}

export function useLazyRouter(): LazyRouterInstance {
  const [isPending, startTransition] = useTransition()
  const { push, refresh, back, replace } = useRouter()

  const lazyPush = (href: string, options?: NavigateOptions): void => {
    startTransition(() => push(href, options))
  }

  const lazyReplace = (href: string, options?: NavigateOptions): void => {
    startTransition(() => replace(href, options))
  }

  const lazyBack = (): void => {
    startTransition(back)
  }

  const lazyRefresh = (): void => {
    startTransition(refresh)
  }

  return { lazyPush, lazyRefresh, lazyBack, lazyReplace, isPending }
}
