<template>
  <div class="flex justify-center items-center flex-col gap-10 h-screen">
    <div class="w-20 h-20">
      <img :src="imoje" alt="image" class="w-full h-full" />
    </div>
    <div class="flex flex-col justify-center items-center gap-5">
      <h1 class="text-2xl font-bold">У вас нет заказов</h1>
      <p class="text-lg text-[#9B9B9B] text-center">
        Вы нищеброд? <br />
         Оформите хотя бы один заказ.
      </p>
    </div>
    <NuxtLink to="/" class="w-2xs">
      <AppButton label="Вернуться назад" />
    </NuxtLink>
  </div>
</template>

<script setup>
import imoje from "@/assets/images/77d760fef19cbd245e3cca806ebdd3a2efb5ad9d.png";
</script>
