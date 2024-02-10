<template>
  <main class="flex flex-col items-center justify-center">
    <h1
      class="text-3xl md:text-4xl font-bold text-white max-w-[620px] text-center mt-20"
    >
      Инвестируй в объект от 0,24 ETH и получай до
      <span class="text-buttonColor"> 40% годовых</span>
    </h1>
    <div
      class="container w-full mx-auto p-4 sm:px-6 lg:px-8 flex flex-col md:flex-row mint-block gradient-border mt-20 items-center justify-center"
    >
      <HeroInfo />
      <HeroMint />
    </div>
  </main>
</template>

<style scoped>
.mint-block {
  background: rgba(255, 255, 255, 0.08);
}
.gradient-border {
  border-radius: 24px;
  border: 1px solid rgba(111, 74, 255, 0.4);
  background: rgba(255, 255, 255, 0.08);
}
</style>
