<template>
  <div class="container mx-auto">
    <HeaderNavbar></HeaderNavbar>
    <HeaderCTA></HeaderCTA>
    <HeaderInfo></HeaderInfo>
    <HeroAbout></HeroAbout>
    <HeroMap></HeroMap>
    <HeroCarousel></HeroCarousel>
    <HeroAboutBuilder></HeroAboutBuilder>
    <HeroRoadMap></HeroRoadMap>
  </div>
  <section class="px-4 bg-primary gradient-bg mt-20">
    <Hero></Hero>

    <h1 class="text-3xl font-bold text-white text-center pt-20">
      Как приобрести токен. Подробная инструкция:
    </h1>
    <Steps></Steps>
  </section>
  <Footer></Footer>

  <!-- <ClientOnly>
    <w3m-button />
  </ClientOnly> -->
</template>

<style>
.gradient-bg {
  background: linear-gradient(to bottom, #0f0f23, #000000);
  border-radius: 20px 20px 0 0;
}
.button-bg {
  background: rgba(111, 74, 255, 1);
}
</style>
