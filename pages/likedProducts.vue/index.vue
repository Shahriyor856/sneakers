<template>
  <div class="flex flex-col w-full gap-10 p-16 bg-[#FFFFFF] rounded-b-[25px]">
    <div class="flex justify-center items-start gap-5">
      <NuxtLink to="/" class="border-[#C4C4C4] rounded-[20px] w-10 h-10"
        ><</NuxtLink
      >
      <h1 class="text-5xl font-bold">Мои покупки</h1>
    </div>

    <div class="grid grid-cols-4 gap-16">
      <ProductUI
        v-for="(item, index) in cartItems"
        :key="index"
        :malumot="item"
      />
    </div>
  </div>
</template>

<script setup>
import { usecart } from "@/composables/useCart";

const { cartItems } = usecart();
</script>
