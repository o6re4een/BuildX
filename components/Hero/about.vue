<template>
  <div
    class="container mx-auto flex flex-col gap-5 px-6 mt-20 justify-center items-center"
  >
    <h1 class="text-3xl font-bold">Об объекте</h1>
    <p class="text-md text-center md:w-1/2 w-full">
      Просторная студия (площадь 32,68 м2) со всем необходимым оснащением для
      комфортного отдыха, огромным балконом (площадь 14,63 м2) и собственным
      выходом к бассейну в самом сердце Чангу
    </p>
    <div class="relative flex flex-col items-center">
      <img
        src="~/assets/img/galery_5.png"
        class="h-[400px] max-w-full rounded-3xl brightness-50 object-cover"
      />
      <div
        class="absolute top-1/3 flex flex-col gap-4 justify-center items-center"
      >
        <img src=" ~/assets/img/Play.svg" class="w-10 h-10" />
        <p class="text-white fond-bold text-center text-2xl max-w-[370px]">
          Отправиться в виртуальный тур по объекту
        </p>
      </div>
    </div>
  </div>
</template>
