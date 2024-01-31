<template>
  <!-- Остальная часть вашего компонента -->

  <!-- Модальное окно -->
  <div
    v-if="isOpen"
    class="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black z-20"
  >
    <div class="modal-content bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        src="~/assets/img/ModalImage.png"
        alt="Error"
        class="w-40 h-40 mx-auto mb-4"
      />
      <h3 class="text-xl font-semibold mb-2">Что-то пошло не так:(</h3>
      <p>Пожалуйста, посмотрите инструкцию и повторите подключение еще раз.</p>
      <p>Ошибка: {{ error }}</p>
      <button
        @click.stop="emit('modal-close')"
        class="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Хорошо
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  isOpen: Boolean,
  error: String,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null);
onClickOutside(target, () => emit("modal-close"));
</script>
