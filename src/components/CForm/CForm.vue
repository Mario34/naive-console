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
        @update:value="(val) => onFieldUpdate(val, item.key)"
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

<script lang="tsx">
import { defineComponent, ref, unref } from 'vue'
import {
  NForm, NFormItem, NButton, NSpace, NInput,
} from 'naive-ui'
import { get, set } from 'lodash-es'

import type { PropType } from 'vue'
import type { CFormScheme } from './type'

export default defineComponent({
  name: 'CForm',
  components: {
    NForm, NFormItem, NButton, NSpace, NInput,
  },
  props: {
    schemes: {
      type: Array as PropType<CFormScheme[]>,
      required: true,
    },
    value: {
      type: Object,
      default: undefined,
    },
  },
  expose: [],
  emits: ['reset', 'search', 'fieldUpdate'],
  setup(props, { emit }) {
    const formRef = ref<InstanceType<typeof NForm>>()
    const fieldRefs = ref<Record<string, any>>({})
    const formValue = ref<Record<string, unknown>>(unref(props.value) ?? {})
    const onReset = () => {
      props.schemes.forEach(item => {
        set(formValue.value, item.key, null)
        emit('reset', {})
      })
    }
    const onSearch = () => {
      emit('search', formValue.value)
    }
    return {
      get,
      formRef,
      formValue,
      fieldRefs,
      onReset,
      onSearch,
      onFieldUpdate: (val: unknown, key: string) => {
        set(formValue.value, key, val)
        emit('fieldUpdate', key, val)
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.n-input,
.n-select {
  min-width: 200px;
}
</style>
