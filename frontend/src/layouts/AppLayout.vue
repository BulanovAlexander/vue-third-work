<script setup lang="ts">
import AppLayoutHeader from "./AppLayoutHeader.vue";
</script>

<template>
  <div class="app_layout">
    <AppLayoutHeader />
    <slot />
  </div>
</template>
