<template>
  <n-form
    ref="formRef"
    :model="formValue"
    inline
    size="small"
    label-width="{80}"
    label-placement="left"
  >
    <n-form-item
      v-for="item in schemes"
      :key="item.key"
      :label="item.title"
      :path="item.key"
    >
      <component
        :is="item.field"
        :ref="(comp) => fieldRefs[item.key] = comp"
        v-bind="item.props"
        :value="get(formValue, item.key)"
        @update:value="(val: any) => onFieldUpdate(item.key, val)"
      />
    </n-form-item>
    <n-form-item>
      <n-space>
        <n-button size="medium" @click="onReset">
          重置
        </n-button>
        <n-button size="medium" type="primary" @click="onSearch">
          搜索
        </n-button>
      </n-space>
    </n-form-item>
  </n-form>
</template>

<script setup lang="tsx">
import { ref, unref } from 'vue'
import { NForm, NFormItem, NButton, NSpace } from 'naive-ui'
import { get, set } from 'lodash-es'

import type { CFormScheme } from './type'

const props = defineProps<{
  schemes: CFormScheme[]
  value?: Record<string, any>
}>()

const emit = defineEmits(['reset', 'search', 'fieldUpdate'])

const formRef = ref<InstanceType<typeof NForm>>()
const fieldRefs = ref<Record<string, any>>({})
const formValue = ref<Record<string, unknown>>({ ...props.value })
const onReset = () => {
  props.schemes.forEach(item => {
    set(formValue.value, item.key, null)
    emit('reset', {})
  })
}
const onSearch = () => {
  emit('search', formValue.value)
}
const onFieldUpdate = (key: string, val: unknown) => {
  set(formValue.value, key, val)
  emit('fieldUpdate', key, val)
}
</script>

<style lang="scss" scoped>
.n-input,
.n-select {
  min-width: 200px;
}
</style>
