import { RefObject, useEffect } from "react"

import { useHashState } from "./useHashString"

export function useNavigateViaHash(
  ref: RefObject<HTMLDivElement>,
  searchParamKey: string
) {
  const [hash] = useHashState()

  useEffect(() => {
    if (hash === `${searchParamKey}`) {
      ref?.current?.scrollIntoView({
        behavior: "instant",
        block: "center",
        inline: "center"
      })
    }
  }, [hash])
}
