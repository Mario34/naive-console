const delay = (time: number) => new Promise((resolve) => {
  const timer = setTimeout(resolve, time)
  return () => {
    clearTimeout(timer)
  }
})

let uuid = 1000
const gId = () => ++uuid

/** 模拟增删改查操作 */
export const useMockPage = <T = Record<string, any>>(option: {
  total: number
  gRow: (index: number, id: number) => T
}) => {
  const originData: (T & { id: number })[] = []
  let index = 0
  while (index < option.total) {
    const id = gId()
    originData.push({
      ...option.gRow(index, id),
      id,
    })
    index++
  }
  return {
    getList: async (query: {
      page: number
      pageSize: number
    } & Record<string, any>) => {
      console.log('getList params', query)
      await delay(500)
      return {
        data: originData.slice((query.page - 1) * query.pageSize, (query.page) * query.pageSize),
        page: query.page,
        pageCount: Math.ceil(option.total / query.pageSize),
        itemCount: option.total,
        message: 'success',
        query,
      }
    },
    update: async (params: { id: number } & T) => {
      await delay(500)
      const index = originData.findIndex(o => o.id === params.id)
      originData.splice(index, 1, { ...params })
      return {
        message: 'success',
      }
    },
    add: async (params: T) => {
      await delay(500)
      originData.push({
        ...params,
        id: gId(),
      })
      return {
        message: 'success',
      }
    },
    remove: async (params: { id: number }) => {
      await delay(500)
      const index = originData.findIndex(o => o.id === params.id)
      originData.splice(index, 1)
      return {
        message: 'success',
      }
    },
  }
}
