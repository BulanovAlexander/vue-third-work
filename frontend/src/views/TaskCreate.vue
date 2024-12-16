<script setup>
import TaskCardCreator from "../modules/tasks/components/TaskCardCreator.vue";

defineEmits(["addTask"]);
</script>

<template>
  <TaskCardCreator @add-task="$emit('addTask', $event)" />
</template>
