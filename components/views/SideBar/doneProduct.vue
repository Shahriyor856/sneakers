<template>
  <div class="flex flex-col justify-center h-full items-center gap-8">
    <div class="w-32 h-32">
      <img :src="file" alt="box" class="w-full h-full" />
    </div>
    <div class="flex flex-col justify-center items-center gap-5">
      <h1 class="text-2xl font-semibold">Заказ оформлен!</h1>
      <p class="text-[#5C5C5C] text-lg text-center">
        Ваш заказ #18 скоро будет передан <br />
        курьерской доставке
      </p>
    </div>
    <div class="w-full">
      <NuxtLink to="likedProducts.vue">
        <AppButton label="Вернуться назад" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import file from "@/assets/images/file.png";
</script>
