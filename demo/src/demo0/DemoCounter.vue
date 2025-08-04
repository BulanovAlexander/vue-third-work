<script setup lang="js">
import { ref } from "vue";

const counter = ref(0);

const decrement = () => {
  counter.value = counter.value - 1;
};

const increment = () => {
  counter.value = counter.value + 1;
};
</script>

<template>
  <div>
    <button @click="decrement">-</button>

    <span> Current value: {{ counter }} </span>

    <button @click="increment">+</button>
  </div>
</template>
