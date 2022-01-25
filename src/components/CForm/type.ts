import { defineComponent } from 'vue'

export interface CFormScheme<F = ReturnType<typeof defineComponent>> {
  /** 字段名称（label） */
  title?: string
  /** 字段key值可以是嵌套路径（a.b.c） */
  key: string
  /** 承载字段的组件 */
  field: F
  /** field组件的属性 */
  props?: unknown
  /** 显示当前字段 */
  visitable?: boolean
}
