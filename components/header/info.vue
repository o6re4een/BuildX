<template>
  <div class="bg-white container mx-auto px-6">
    <!-- Property Information -->
    <div class="grid md:grid-cols-4 gap-4 grid-cols-1 sm:grid-cols-2">
      <div class="flex flex-row gap-4">
        <div style="border-left: 1px solid #000; height: 70px"></div>
        <div class="flex flex-col items-center justify-center">
          <div class="text-lg font-bold">Тип недвижимости:</div>
          <div class="font-medium">Студия, апартаменты</div>
        </div>
      </div>
      <div>
        <div class="flex flex-row gap-4">
          <div style="border-left: 1px solid #000; height: 70px"></div>
          <div class="flex flex-col items-center justify-center">
            <div class="text-lg font-bold">Площадь объекта:</div>
            <div class="font-medium">47,31 м2</div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-row gap-4">
          <div style="border-left: 1px solid #000; height: 70px"></div>
          <div class="flex flex-col items-center justify-center">
            <div class="ttext-lg font-bold">Срок сдачи:</div>
            <div class="font-medium">май 2025</div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-row gap-4">
          <div style="border-left: 1px solid #000; height: 70px"></div>
          <div class="flex flex-col items-center justify-center">
            <div class="text-lg font-bold">Доходность (в год):</div>
            <div class="font-medium">до 40%</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Cost Information -->
    <div class="mt-[140px] flex flex-col gap-3">
      <div class="text-lg font-bold">Стоимость объекта: $190 000</div>
      <div class="text-sm">Стоимость 1 доли (токен): $40</div>
    </div>
    <!-- Progress Bar -->
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-20">
      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 0%"></div>
    </div>
    <div class="text-right text-sm mt-5">Собрано: 0%</div>
    <!-- Action Button -->
    <div class="flex items-center justify-center mt-20">
      <button
        class="text-white py-3 px-6 rounded-2xl button-bg w-full md:w-fit"
      >
        Купить токен
      </button>
    </div>
  </div>
</template>
<!-- <style scoped>
.button-bg {
  background: rgba(111, 74, 255, 1);
}
</style> -->
