<template>
  <button class="icon-button">
    <i :class="icon"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IconButton',
  props: {
    icon: {
      type: String,
      requored: true,
    },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.icon-button {
  padding: 10px;
  height: 36px;
  width: 36px;
  box-sizing: border-box;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: mix(#fff, transparent, 20);

  &:hover {
    background-color: mix(#fff, transparent, 30);
  }

  &:active {
    background-color: mix(#fff, transparent, 20);
  }

  & + .icon-button {
    margin-left: 12px;
  }

  i {
    height: 16px;
    width: 16px;
  }
}
</style>