<script setup lang="js">
import { ref } from 'vue'

const counter = ref(0)

const decrement = () => {
	counter.value = counter.value - 1
}

const increment = () => {
	counter.value = counter.value + 1
}
</script>

<template>
	<div class="counter">
		<button @click="decrement">-</button>

		<span> Current value: {{ counter }} </span>

		<button @click="increment">+</button>
	</div>
</template>

<style lang="scss" scoped>
.counter {
	display: flex;
	align-items: center;

	button {
		margin: 0 10px;
		font-size: 1.5rem;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		border: none;
		background: #dd0000;
		color: white;
		cursor: pointer;

		&:hover {
			background: #ff0000;
		}
	}
}
</style>
