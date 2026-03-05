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
