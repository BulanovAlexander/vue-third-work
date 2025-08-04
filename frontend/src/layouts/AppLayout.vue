<script setup lang="js">
import AppLayoutHeader from './AppLayoutHeader.vue'
</script>

<template>
	<div class="app_layout">
		<AppLayoutHeader />
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.app_layout {
	display: flex;
	flex-direction: column;
	height: 100vh;
}
</style>
