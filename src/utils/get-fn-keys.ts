const getFnKeys = (config: object): string[] => {
  const keys: string[] = []

  const recursive = (obj: object, parents: string[]) => {
    Object.entries(obj).map(([key, val]) => {
      /* istanbul ignore else */
      if (typeof val === 'object') {
        recursive(val, [...parents, key])
      } else if (typeof val === 'function') {
        keys.push([...parents, key].join('.'))
      }
    })
  }
  recursive(config, [])
  return keys
}

export default getFnKeys
