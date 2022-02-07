<template>
  <c-table
    :init="initCTable"
    :table-props="{ columns }"
    :filter-props="{ schemes: formSchemes }"
  />
</template>

<script setup lang="tsx">
import { NInput, NInputNumber, NSelect, NSwitch } from 'naive-ui'
import { CTable, useCTable } from '@/components/CTable'
import { useMockPage } from '@/mock/list'

const mockPage = useMockPage({
  total: 188,
  gRow(index, id) {
    const addressMap = ['杭州市', '宁波市', '温州市', '嘉兴市', '台州', '绍兴', '金华市', '湖州市', '衢州市', '丽水市', '舟山市']
    return {
      order: index + 1,
      name: `用户${id}`,
      code: `EF${Math.random().toString().slice(-12)}`,
      type: Math.ceil(Math.random() * 4),
      status: Math.ceil(Math.random() * 4),
      city: addressMap[Math.floor(Math.random() * addressMap.length)],
      timestamp: Date.now(),
    }
  },
})
const { init: initCTable, state } = useCTable<any>({
  getList: mockPage.getList,
  autoGetFirst: true,
  pagination: {
    showSizePicker: true,
  },
  filter: {
    name: 'hahahahha',
    type: '1',
  },
})

const formSchemes = [
  {
    title: '名称',
    key: 'name',
    field: NInput,
  },
  {
    title: '类型',
    key: 'type',
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
]
const columns = [
  {
    title: '序号',
    key: 'order',
    align: 'center',
  },
  {
    title: '用户名',
    key: 'name',
  },
  {
    title: '编码',
    key: 'code',
  },
  {
    title: 'type',
    key: 'type',
  },
  {
    title: 'city',
    key: 'city',
  },
  {
    title: 'status',
    key: 'status',
  },
  {
    title: 'timestamp',
    key: 'timestamp',
  },
]
</script>
