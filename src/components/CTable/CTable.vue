<template>
  <div class="">
    <c-form
      v-bind="filterProps"
      :style="{padding: '20px 0'}"
      @search="onSearch"
      @reset="onReset"
    />
    <n-data-table v-bind="tableProps" />
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import { NDataTable } from 'naive-ui'
import { CForm } from '@/components/CForm'

const filterNa = (value: Record<string, unknown>) => {
  Object.entries(value).filter(([key, item]) => item !== null)
}

export default defineComponent({
  name: 'CTable',
  components: {
    NDataTable, CForm,
  },
  props: {
    filterProps: {
      type: Object,
      default: () => ({}),
    },
    tableProps: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { }) {
    return {
      onSearch(value) {
        console.log(value)
      },
      onReset() {
        //
      },
    }
  },
})
</script>
