<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" size="small">
    <n-message-provider>
      <c-table
          :table-props="{
          columns,
          data
        }"
          :filter-props="{
          schemes: formSchemes,
        }"
      />
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="tsx">
import {
  defineComponent, ref, reactive, onMounted, h,
} from 'vue'
import { CTable } from '@/components/CTable'
import {
  NConfigProvider, NMessageProvider, darkTheme, NButton, NInput, NInputNumber, NSelect, NSwitch, zhCN,
} from 'naive-ui'

export default defineComponent({
  name: 'ListPage',
  components: {
    NConfigProvider,
    NMessageProvider,
    CTable,
  },
  setup() {
    return {
      zhCN,
      formSchemes: [
        {
          title: '名称',
          key: 'name',
          field: NInput,
        },
        {
          title: '类型',
          key: 'prop.type',
          field: NSelect,
          props: {
            placeholder: '选择类型',
            options: [
              {
                label: '类型1',
                value: '1',
              },
              {
                label: '类型2',
                value: '2',
              },
            ],
            'on-update:value': (value) => {
              console.log(value)
            },
          },
        },
        {
          title: '年龄',
          key: 'age',
          field: NInputNumber,
        },
        {
          title: '开关',
          key: 'off',
          field: NSwitch,
        },
      ],
      darkTheme,
      data: [
        {
          name: 'hahaha',
          age: '18',
          address: 'beijing',
          a: {
            b: {
              c: '[a.b.c] path value',
            },
          },
          render: 'custom render',
        },
        {
          name: 'hahaha',
          age: '18',
          address: 'beijing',
          a: {
            b: {
              c: '[a.b.c] path value',
            },
          },
          render: 'custom render',
        },
        {
          name: 'hahaha',
          age: '18',
          address: 'beijing',
          a: {
            b: {
              c: '[a.b.c] path value',
            },
          },
          render: 'custom render',
        },
        {
          name: 'hahaha',
          age: '18',
          address: 'beijing',
          a: {
            b: {
              c: '[a.b.c] path value',
            },
          },
          render: 'custom render',
        },
        {
          name: 'hahaha',
          age: '18',
          address: 'beijing',
          a: {
            b: {
              c: '[a.b.c] path value',
            },
          },
          render: 'custom render',
        },
      ],
      columns: [
        {
          title: 'Name',
          key: 'name',
          align: 'center',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        },
        {
          title: 'Path',
          key: 'a.b.c',
        },
        {
          title: 'render',
          key: 'render',
          render() {
            return <NButton type="success">custom render</NButton>
          },
        },
      ],
    }
  },
})
</script>
