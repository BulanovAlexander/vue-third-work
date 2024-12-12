<script setup>
import { ref } from "vue";
import CounterButton from "./CounterButton.vue";
import CounterValue from "./CounterValue.vue";

const count = ref(0);

/* Метод уменьшения значения */
const decrement = () => {
  count.value = count.value - 1;
};

/* Метод увеличения значения */
const increment = () => {
  count.value = count.value + 1;
};
</script>

<template>
  <div class="counter">
    <CounterButton @click="decrement"> - </CounterButton>

    <CounterValue :value="count" />

    <CounterButton @click="increment"> + </CounterButton>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
}
</style>
