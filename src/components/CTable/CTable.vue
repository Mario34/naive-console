<template>
  <div class="">
    <c-form
      v-bind="filterProps"
      :value="state?.filter"
      :style="{padding: '20px 0'}"
      @search="onSearch"
      @fieldUpdate="onFieldUpdate"
      @reset="onReset"
    />
    <n-data-table
      remote
      v-bind="tableProps"
      :data="state?.list ?? []"
      :pagination="state?.pagination"
      :loading="state?.loading"
      @update:page="onPageChange"
      @update:page-size="onPageSizeChange"
    />
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { NDataTable } from 'naive-ui'
import { CForm } from '@/components/CForm'

import type { UnwrapNestedRefs } from 'vue'
import type { StateType, InitType, Methods } from './index'

const props = defineProps<{
  init: InitType
  filterProps: any
  tableProps: any
}>()

let state = ref<UnwrapNestedRefs<StateType<any> | null>>(null)
let methods: Methods | null = null

// 绑定状态
const bindState = (value: UnwrapNestedRefs<StateType<any> | null>) => {
  state.value = value
}
// 绑定方法
const bindMethods = (value: Methods) => {
  methods = value
}
const onPageChange = (page: number) => {
  if (methods) {
    methods.getList({
      page,
      pageSize: state?.value?.pagination.pageSize ?? 10,
      ...state?.value?.filter,
    })
  }
}
const onPageSizeChange = (size: number) => {
  if (state.value && methods) {
    state.value.pagination.pageSize = size
    methods.getList({
      page: 1,
      pageSize: size,
      ...state?.value?.filter,
    })
  }
}
const onRefresh = () => {
  if (state.value && methods) {
    methods.getList({
      page: state.value.pagination.page,
      pageSize: state.value.pagination.pageSize,
      ...state?.value?.filter,
    })
  }
}
const onSearch = (val: Record<string, any>) => {
  if (state.value && methods) {
    methods.getList({
      page: state.value.pagination.page,
      pageSize: state.value.pagination.pageSize,
      ...state?.value?.filter,
    })
  }
}
const onReset = () => {
  if (state.value) {
    state.value.filter = {}
  }
}
const onFieldUpdate = (key: string, val: any) => {
  if (state.value) {
    state.value.filter[key] = val
  }
}
props.init({ bindState, bindMethods })
</script>
