<script setup>
import AppLayoutHeader from "./AppLayoutHeader.vue";
import AppLayoutSidebar from "./AppLayoutSidebar.vue";
</script>

<template>
  <div class="app_layout">
    <AppLayoutHeader />
    <div class="content">
      <AppLayoutSidebar />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app_layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
}
</style>
