<script setup>
import CounterButton from "./CounterButton.vue";
import CounterValue from "./CounterValue.vue";
import { useCounterStore } from "./store";

const counterStore = useCounterStore();
</script>

<template>
  <div class="counter">
    <CounterButton
      :disabled="counterStore.isDecrementDisabled"
      @click="counterStore.decrement"
    >
      -
    </CounterButton>

    <CounterValue :value="counterStore.value" />

    <CounterButton @click="counterStore.increment"> + </CounterButton>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
}
</style>
