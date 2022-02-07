import { reactive, readonly, unref } from 'vue'
import CTable from './CTable.vue'

import type { UnwrapNestedRefs } from 'vue'
import type { PaginationProps } from 'naive-ui'

export { CTable }

export interface BaseParams extends Record<string, any> {
  page: number
  pageSize: number
}

export interface HttpList {
  (params: BaseParams): Promise<{
    data: any[]
    page: number
    pageCount: number
    itemCount: number
  } & Record<string, any>>
}

interface PaginationType extends PaginationProps {
  page: number
  pageSize: number
  pageCount: number
  itemCount: number
  showSizePicker: boolean
  pageSizes: number[]
}

export interface FilterType extends Record<string, any> {}

export interface Methods {
  getList: (params: BaseParams) => Promise<void>
  refresh: () => void
  setFilter: (value: FilterType) => void
}

export interface InitParamsType {
  bindState: (state: UnwrapNestedRefs<StateType>) => void
  bindMethods: (methods: Methods) => void
}

export interface InitType {
  (params: InitParamsType): void
}

export interface StateType<T = Record<string, any>> {
  loading: boolean
  /* 初始化标记 */
  initialized: boolean
  list: T[]
  filter: FilterType
  pagination: PaginationType
}

export const useCTable = <T extends Record<string, any>>(option: {
  getList: HttpList
  /* 自动加载第一页数据 */
  autoGetFirst?: boolean
  /* 默认的分页配置(非受控) */
  pagination?: Partial<PaginationType>
  /* 默认的筛选项(非受控) */
  filter?: FilterType
}) => {
  const state = reactive<StateType<T>>({
    loading: false,
    initialized: false,
    list: [],
    filter: {
      ...unref(option.filter),
    },
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 0,
      itemCount: 0,
      showSizePicker: true,
      pageSizes: [10, 20, 50, 100],
      ...unref(option.pagination),
    },
  })
  const getList = async (params: {
    page: number
    pageSize: number
  } & Record<string, any>) => {
    try {
      state.loading = true
      const res = await option.getList(params)
      state.list = res.data
      state.pagination.page = res.page
      state.pagination.pageCount = res.pageCount
      state.pagination.itemCount = res.itemCount
    } catch (e) {
      state.list = []
    } finally {
      state.loading = false
    }
  }
  const refresh = () => getList({
    page: state.pagination.page,
    pageSize: state.pagination.pageSize,
    ...state.filter,
  })
  const setFilter = (value: Record<string, any>) => {
    state.filter = value
  }
  return {
    async init(params: InitParamsType) {
      params.bindState(state)
      params.bindMethods({ getList, refresh, setFilter })
      if (option.autoGetFirst) {
        await getList({
          page: state.pagination.page,
          pageSize: state.pagination.pageSize,
          ...state.filter,
        })
      }
      state.initialized = true
    },
    refresh,
    setFilter,
    state: readonly(state),
  }
}
