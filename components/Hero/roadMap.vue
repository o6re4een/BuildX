<template>
  <div class="flex justify-center py-12">
    <div class="max-w-4xl w-full">
      <!-- Контейнер для двух колонок -->
      <div class="flex gap-8 md:flex-row flex-col">
        <!-- Колонка для контрольных точек -->
        <div class="flex-1 roadmap-bg rounded-lg p-6 shadow-lg">
          <h2 class="text-2xl font-semibold mb-4">Контрольные точки</h2>
          <ol class="relative border-s border-dashed roadmap-dashed">
            <li
              class="mb-10 ms-4"
              v-for="(item, index) in sectionsData?.roadMap"
            >
              <div
                class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border roadmap-line"
              ></div>

              <time
                class="mb-1 font-normal leading-none flex flex-row gap-2 roadmap-heading items-center"
              >
                <img src="~/assets/img/roadPoint.svg" class="w-5 h-5" />
                {{ item.date }}</time
              >

              <p class="mb-4 font-normal">{{ item.description }}</p>
            </li>
          </ol>
        </div>

        <!-- Колонка для правовых документов -->
        <div class="flex-1 roadmap-bg rounded-lg p-6 shadow-lg">
          <h2 class="text-2xl font-semibold mb-4">Правовые документы</h2>
          <ul class="space-y-10 flex flex-col justify-center">
            <li
              class="flex justify-between items-center"
              v-for="(item, index) in sectionsData?.docs"
            >
              <div class="flex flex-row gap-2 items-center">
                <img src="~/assets/img/docIcon.svg" class="w-5 h-5" />
                <span class="font-normal text-lg">{{ item.title }}</span>
              </div>

              <NuxtLink
                class="w-8 h-8 roadmap-line rounded-full flex items-center justify-center"
                :to="`${item.link}`"
                target="_blank"
              >
                <img src="~/assets/img/download.svg" class="w-5 h-5" />
              </NuxtLink>
            </li>
            <!-- Другие документы... -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.roadmap-bg {
  background: rgba(251, 250, 250, 1);
}

.roadmap-heading {
  color: rgba(111, 74, 255, 1);
}

.roadmap-line {
  border-color: rgba(111, 74, 255, 1);
  background-color: rgba(111, 74, 255, 1);
}

.roadmap-dashed {
  border-color: rgba(111, 74, 255, 1);
}
</style>

<script setup lang="ts">
import sectionsData from "~/assets/data/data.json";
// console.log(sectionsData);
</script>
