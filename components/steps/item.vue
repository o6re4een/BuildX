<script setup lang="ts">
import { defineProps } from "vue";

interface IProps {
  description: string;
  number: string;
  class: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div
    :class="
      'container bg-gray-800 bg-opacity-75 p-7 rounded-lg shadow-md text-white steps-border gradient-border leading-tight ' +
      props?.class
    "
  >
    <div class="step-header flex flex-col items-start">
      <!-- Иконка или номер шага здесь -->
      <h3 class="step-title text-3xl font-bold">{{ props?.number }}</h3>
    </div>
    <p class="pt-10 font-normal">
      <!-- Описание шага -->
      {{ props?.description }}
    </p>
  </div>
</template>

<style scoped>
.steps-border {
  border-radius: 24px;
  border: 1px solid rgba(111, 74, 255, 0);
  background: rgba(255, 255, 255, 0.08);
}

.gradient-border {
  border-radius: 24px;
  border: 1px solid rgba(111, 74, 255, 0.4);
  background: rgba(255, 255, 255, 0.08);
}
</style>
