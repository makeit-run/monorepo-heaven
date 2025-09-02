import { useCallback, useState } from "react"

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return [value, toggle]
}

export default useToggle
