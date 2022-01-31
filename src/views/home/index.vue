<template>
  <n-space vertical :size="16">
    <n-card title="数据概览示例">
      <n-grid :x-gap="12" :y-gap="8" cols="1 200:2 600:4">
        <n-gi>
          <n-statistic label="统计数据" :value="1358987">
            <template #prefix>
              <n-icon>
                <Touch1Icon />
              </n-icon>
            </template>
          </n-statistic>
        </n-gi>
        <n-gi>
          <n-statistic label="统计数据" :value="99">
            <template #prefix>
              <n-icon>
                <AiStatusCompleteIcon />
              </n-icon>
            </template>
            <template #suffix>
              / 100
            </template>
          </n-statistic>
        </n-gi>
        <n-gi>
          <n-statistic label="统计数据" :value="99">
            <template #prefix>
              <n-icon>
                <AlignHorizontalLeftIcon />
              </n-icon>
            </template>
            <template #suffix>
              / 100
            </template>
          </n-statistic>
        </n-gi>
        <n-gi>
          <n-statistic label="统计数据" :value="138">
            <template #prefix>
              <n-icon>
                <AnnotationVisibilityIcon />
              </n-icon>
            </template>
            <template #suffix>
              / 279
            </template>
          </n-statistic>
        </n-gi>
      </n-grid>
    </n-card>
    <n-grid :x-gap="12" :y-gap="8" cols="1 800:2">
      <n-gi>
        <n-card title="加班冠军">
          <n-data-table :columns="columns" :data="data" />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="销量冠军">
          <n-data-table :columns="columns" :data="data" />
        </n-card>
      </n-gi>
    </n-grid>
    <n-grid :x-gap="12" :y-gap="8" cols="1 600:2 800:3">
      <n-gi>
        <n-card title="数据概览示例">
          <n-grid :x-gap="12" :y-gap="8" cols="1 200:2 600:4">
            <n-gi>
              <n-statistic label="统计数据" :value="1358987">
                <template #prefix>
                  <n-icon>
                    <Touch1Icon />
                  </n-icon>
                </template>
              </n-statistic>
            </n-gi>
            <n-gi>
              <n-statistic label="统计数据" :value="99">
                <template #prefix>
                  <n-icon>
                    <AiStatusCompleteIcon />
                  </n-icon>
                </template>
                <template #suffix>
                  / 100
                </template>
              </n-statistic>
            </n-gi>
            <n-gi>
              <n-statistic label="统计数据" :value="99">
                <template #prefix>
                  <n-icon>
                    <AlignHorizontalLeftIcon />
                  </n-icon>
                </template>
                <template #suffix>
                  / 100
                </template>
              </n-statistic>
            </n-gi>
            <n-gi>
              <n-statistic label="统计数据" :value="138">
                <template #prefix>
                  <n-icon>
                    <AnnotationVisibilityIcon />
                  </n-icon>
                </template>
                <template #suffix>
                  / 279
                </template>
              </n-statistic>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="数据概览示例">
          <n-grid :x-gap="12" :y-gap="8" cols="1 200:2 600:4">
            <n-gi>
              <n-statistic label="统计数据" :value="1358987">
                <template #prefix>
                  <n-icon>
                    <Touch1Icon />
                  </n-icon>
                </template>
              </n-statistic>
            </n-gi>
            <n-gi>
              <n-statistic label="统计数据" :value="99">
                <template #prefix>
                  <n-icon>
                    <AiStatusCompleteIcon />
                  </n-icon>
                </template>
                <template #suffix>
                  / 100
                </template>
              </n-statistic>
            </n-gi>
            <n-gi>
              <n-statistic label="统计数据" :value="99">
                <template #prefix>
                  <n-icon>
                    <AlignHorizontalLeftIcon />
                  </n-icon>
                </template>
                <template #suffix>
                  / 100
                </template>
              </n-statistic>
            </n-gi>
            <n-gi>
              <n-statistic label="统计数据" :value="138">
                <template #prefix>
                  <n-icon>
                    <AnnotationVisibilityIcon />
                  </n-icon>
                </template>
                <template #suffix>
                  / 279
                </template>
              </n-statistic>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="数据概览示例">
          <n-grid :x-gap="12" :y-gap="8" cols="1 200:2 600:4">
            <n-gi>
              <n-statistic label="统计数据" :value="1358987">
                <template #prefix>
                  <n-icon>
                    <Touch1Icon />
                  </n-icon>
                </template>
              </n-statistic>
            </n-gi>
            <n-gi>
              <n-statistic label="统计数据" :value="99">
                <template #prefix>
                  <n-icon>
                    <AiStatusCompleteIcon />
                  </n-icon>
                </template>
                <template #suffix>
                  / 100
                </template>
              </n-statistic>
            </n-gi>
            <n-gi>
              <n-statistic label="统计数据" :value="99">
                <template #prefix>
                  <n-icon>
                    <AlignHorizontalLeftIcon />
                  </n-icon>
                </template>
                <template #suffix>
                  / 100
                </template>
              </n-statistic>
            </n-gi>
            <n-gi>
              <n-statistic label="统计数据" :value="138">
                <template #prefix>
                  <n-icon>
                    <AnnotationVisibilityIcon />
                  </n-icon>
                </template>
                <template #suffix>
                  / 279
                </template>
              </n-statistic>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
    </n-grid>
  </n-space>
</template>

<script setup lang="ts">
import { h } from 'vue'
import {
  NDataTable, NGrid, NGi, NCard, NStatistic, NIcon, NSpace, NTag,
} from 'naive-ui'
import {
  AiStatusComplete as AiStatusCompleteIcon, Touch1 as Touch1Icon,
  AlignHorizontalLeft as AlignHorizontalLeftIcon, AnnotationVisibility as AnnotationVisibilityIcon,
} from '@vicons/carbon'

const columns = [
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
    title: 'Tags',
    key: 'tags',
    render(row: any) {
      const tags = row.tags.map((tagKey: any) => {
        return h(
          NTag,
          {
            style: {
              marginRight: '6px',
            },
            type: 'info',
          },
          {
            default: () => tagKey,
          },
        )
      })
      return tags
    },
  },
]

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow'],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
</script>

<style lang="scss">
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}

.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
