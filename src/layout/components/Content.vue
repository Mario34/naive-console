<template>
  <div class="layout-content">
    <div class="layout-content-container">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component
            :is="Component"
            :key="route.path"
          />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-content {
  min-height: calc(100vh - var(--app-header-height));
  box-sizing: border-box;
  padding: 16px;
}

.layout-content-container {
  background-color: var(--app-bg-main);
  height: 100%;
  padding: 20px;
  overflow: hidden;
  border-radius: 4px;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 160ms ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
