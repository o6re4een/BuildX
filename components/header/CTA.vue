<template>
  <div
    class="container mx-auto p-6 bg-white text-center mt-14 mb-6 flex flex-col items-center"
  >
    <div class="flex flex-col items-center gap-4 mb-10">
      <h2 class="text-3xl font-semibold max-w-[287px]">
        ALEX VILLAS COMPLEX 7 STUDIO D POOL
      </h2>
      <p class="text-md">
        Премиальные апартаменты с бассейном на острове Бали (Индонезия)
      </p>
    </div>
    <div class="relative flex space-x-4">
      <!-- Carousel Component -->
      <div class="w-full flex flex-col items-center">
        <div class="relative w-full">
          <div class="md:hidden flex justify-center">
            <div class="absolute left-2 top-2 flex flex-col gap-2">
              <button
                class="bg-white py-2 px-3 rounded-full flex flex-row items-center"
              >
                <img class="mr-2 w-4 h-4" src="~/assets/img/geoPoint.svg" />
                Бали, Индонезия
              </button>
              <button class="bg-white py-2 px-3 rounded-full">
                Идет строительство
              </button>
            </div>
            <div class="absolute flex gap-2 right-2 bottom-5 z-10 rounded-xl">
              <img src="~/assets/img/leftArrow.svg" @click="prevImage" />
              <img src="~/assets/img/rightArrow.svg" @click="nextImage" />
            </div>
            <div class="flex">
              <img
                :src="images[selectedImageIndex]"
                class="h-[470px] max-w-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        <div
          class="space-x-2 overflow-x-hidden overflow-y-hidden md:flex hidden"
        >
          <div class="flex items-center space-x-2">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="flex-none relative transition-size duration-1000"
              :style="{
                width: selectedImageIndex === index ? '716px' : '164px',
              }"
            >
              <!-- Image -->
              <img
                :src="image"
                @click="selectImage(index)"
                class="h-96 w-full object-cover transition-size duration-1000 ease-in-out rounded-3xl"
                :class="{ 'scale-100': selectedImageIndex === index }"
                alt=""
              />

              <!-- Overlay buttons on the selected image -->
              <div
                v-if="selectedImageIndex === index"
                class="absolute bottom-0 gap-2 flex justify-between items-center px-3 py-2 transition-opacity duration-1000"
                :class="{
                  'opacity-100': selectedImageIndex === index,
                  'opacity-0': selectedImageIndex !== index,
                }"
              >
                <button @click.stop="prevImage" class="rounded-full h-10 w-10">
                  <!-- Left arrow icon -->
                  <img src="~/assets/img/leftArrow.svg" />
                </button>
                <button @click.stop="nextImage" class="rounded-full h-10 w-10">
                  <!-- Right arrow icon -->
                  <img src="~/assets/img/rightArrow.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex md:justify-between mt-20 flex-col md:flex-row gap-4 w-full md:w-fit text-lg"
    >
      <button class="button-bg text-white py-4 px-6 rounded-2xl">
        Инвестировать
      </button>
      <button
        class="text-buttonColor py-4 px-6 rounded-2xl border border-buttonColor"
      >
        Об объекте
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import image1 from "~/assets/img/galery_1.png";
import image2 from "~/assets/img/galery_2.png";
import image3 from "~/assets/img/galery_3.png";
import image4 from "~/assets/img/galery_4.png";
import image5 from "~/assets/img/galery_5.png";

const images = ref([
  // Пути к изображениям
  image1,
  image2,
  image3,
  image4,
  image5,
  // и т.д.
]);
const selectedImageIndex = ref(0);

const selectedImageUrl = computed(() => images.value[selectedImageIndex.value]);

function nextImage() {
  selectedImageIndex.value =
    (selectedImageIndex.value + 1) % images.value.length;
}

function prevImage() {
  selectedImageIndex.value =
    (selectedImageIndex.value - 1 + images.value.length) % images.value.length;
}

function selectImage(index) {
  selectedImageIndex.value = index;
}
</script>
<!-- <style scoped>
/* Left and right arrows styles */
button {
  background: none;
  border: none;
}
</style> -->
