<template>
  <div
    class="flex flex-col justify-center h-full items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8"
  >
    <div
      class="w-6 sm:w-8 md:w-16 lg:w-24 xl:w-32 h-6 sm:h-8 md:h-16 lg:h-24 xl:h-32"
    >
      <img :src="box" alt="box" class="w-full h-full" />
    </div>
    <div
      class="flex flex-col justify-center items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5"
    >
      <h1
        class="text-[8px] md:text-sm lg:text-base xl:text-2xl font-medium md:font-medium xl:font-semibold"
      >
        Корзина пустая
      </h1>
      <p class="text-[#5C5C5C] text-[8px] md:text-sm xl:text-lg text-center">
        Добавьте хотя бы одну пару <br />
        кроссовок, чтобы сделать заказ.
      </p>
    </div>
    <div class="w-full">
      <AppButton label="Вернуться назад" @click="closeSidebar" />
    </div>
  </div>
</template>

<script setup>
import box from "@/assets/images/boxApp.png";
import { useSidebar } from "@/composables/useSidebar";
const { closeSidebar } = useSidebar();
</script>
