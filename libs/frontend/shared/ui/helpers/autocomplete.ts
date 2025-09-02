export const getValueByPath = (obj: object, path: string | string[]) => {
  let value: any = obj

  if (Array.isArray(path)) {
    const result: any[] = []
    for (const p of path) {
      const pathValue = getValueByPath(value, p)
      if (pathValue !== undefined) {
        result.push(pathValue)
      }
    }
    return result.join(", ")
  } else {
    const keys = path.split(".")
    for (const key of keys) {
      // eslint-disable-next-line no-prototype-builtins
      if (value && value.hasOwnProperty(key)) {
        value = value[key]
      } else {
        return undefined
      }
    }
  }

  return value
}
