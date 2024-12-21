<script setup>
import AppLayoutHeader from "./AppLayoutHeader.vue";
import AppLayoutSidebar from "./AppLayoutSidebar.vue";
import { useAuthStore } from "@/stores";

const authStore = useAuthStore();
</script>

<template>
  <div class="app_layout">
    <AppLayoutHeader />
    <div class="content">
      <AppLayoutSidebar v-if="authStore.isAuthenticated" />
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
