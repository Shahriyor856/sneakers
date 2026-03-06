<template>
  <div
    class="flex flex-col justify-center h-full items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8"
  >
    <div
      class="w-6 sm:w-8 md:w-16 lg:w-24 xl:w-32 h-6 sm:h-8 md:h-16 lg:h-24 xl:h-32"
    >
      <img :src="file" alt="box" class="w-full h-full" />
    </div>
    <div
      class="flex flex-col justify-center items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5"
    >
      <h1
        class="text-[8px] md:text-sm lg:text-base xl:text-2xl font-medium md:font-medium xl:font-semibold"
      >
        Заказ оформлен!
      </h1>
      <p class="text-[#5C5C5C] text-[8px] md:text-sm xl:text-lg text-center">
        Ваш заказ #18 скоро будет передан <br />
        курьерской доставке
      </p>
    </div>
    <div class="w-full">
      <NuxtLink to="/SubmittedPr" title="Вернуться назад">
        <AppButton label="Вернуться назад" @click="closeSidebar()" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import file from "@/assets/images/file.png";
import { useSidebar } from "@/composables/useSidebar";
// import { useCart } from "@/composables/useCart";

// const { submitCart } = useCart();
const { closeSidebar } = useSidebar();
</script>
