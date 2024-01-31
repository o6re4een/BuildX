<template>
  <HeaderNavbar></HeaderNavbar>
  <HeaderCTA></HeaderCTA>
  <section class="p-8 bg-primary gradient-bg">
    <Hero></Hero>
    <h1 class="text-3xl font-bold text-white text-center pt-20">
      Как успешно сминтить:
    </h1>
    <Steps></Steps>
    <Footer></Footer>
  </section>

  <!-- <ClientOnly>
    <w3m-button />
  </ClientOnly> -->
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(to bottom, #0f0f23, #000000);
  border-radius: 20px 20px 0 0;
}
</style>
