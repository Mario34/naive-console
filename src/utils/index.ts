export const isAbsolutePath = (path: string): boolean => {
  return /^(\/)|(http[s]?:\/\/)/.test(path)
}

export const isUrl = (path: string): boolean => {
  return /^(http[s]?):?\/\//.test(path)
}
