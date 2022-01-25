export function set<T = unknown>(
  target: any,
  path: string[] | string,
  value: T,
) {
  if (typeof path === 'string') {
    path = path.split('.')
  }
  if (Array.isArray(path)) {
    path.reduce((pre, curr, index) => {
      if (index + 1 === path.length) {
        pre[curr] = value
      }
      return pre[curr]
    }, target)
  }
}
