<template>
  <!-- <svg
    width="278"
    height="515"
    viewBox="0 0 278 515"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute top-32 left-0 w-full h-[500px] --z-10"
  >
    <g filter="url(#filter0_f_68_16)">
      <circle
        cx="20.5"
        cy="257.5"
        r="219.5"
        fill="url(#paint0_radial_68_16)"
        fill-opacity="0.35"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_68_16"
        x="-236.1"
        y="0.900002"
        width="513.2"
        height="513.2"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="18.55"
          result="effect1_foregroundBlur_68_16"
        />
      </filter>
      <radialGradient
        id="paint0_radial_68_16"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20.5 257.5) rotate(90) scale(219.5)"
      >
        <stop stop-color="#6F4AFF" stop-opacity="0.39" />
        <stop offset="1" stop-color="#6F4AFF" stop-opacity="0" />
      </radialGradient>
    </defs> -->
  <!-- </svg> -->
  <section class="container mx-auto text-white backdrop-blur-3xl">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
      <StepsItem
        v-for="(step, index) in stepsData"
        :key="index"
        :number="index"
        :description="step"
        :class="{ 'lg:col-span-2': index == 4, 'lg:col-span-1': index != 4 }"
      />
    </div>
    <hr class="container w-full mt-20" />
  </section>
</template>

<script setup lang="ts">
import stepsData from "~/assets/data/steps.json";
</script>

<style scoped>
.gradient-bg-2 {
  border-radius: 439px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(111, 74, 255, 0.14) 0%,
    rgba(111, 74, 255, 0) 100%
  );

  filter: blur(18.549999237060547px);
}
</style>
