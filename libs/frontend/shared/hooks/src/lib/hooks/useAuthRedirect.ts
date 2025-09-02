"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export function useAuthRedirect() {
  const router = useRouter()
  const { status } = useSession()

  // TODO refactor app store
  // const setAfterAuthActions = useAppStore((state) => state.setAuth)

  const onCheckAuth = useCallback(
    // (afterAuth?: AfterAuth, redirectUrl = "/login") => {
    (afterAuth?: any, redirectUrl = "/login") => {
      if (status !== "authenticated") {
        if (afterAuth) {
          // setAfterAuthActions(afterAuth)
        }

        router.push(redirectUrl)
      }
    },
    []
  )
  return { onCheckAuth }
}
