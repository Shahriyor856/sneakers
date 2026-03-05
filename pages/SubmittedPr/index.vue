<template>
  <div class="flex flex-col w-full gap-16 p-16 bg-[#FFFFFF] rounded-b-[25px]">
    <div class="flex justify-start items-center gap-10">
      <NuxtLink to="/" class="border-[#C4C4C4] rounded-[20px] w-10 h-10"
        ><button
          class="flex justify-center items-center w-12 h-12 rounded-2xl border border-[#D3D3D3] cursor-pointer"
        >
          <img :src="back" alt="<" class="w-5 h-5" /></button
      ></NuxtLink>
      <h1 class="text-5xl font-bold">Мои покупки</h1>
    </div>

    <div class="grid grid-cols-4 gap-16">
      <ProductUI
        v-for="(item, index) in submittedProducts"
        :key="index"
        :malumot="item"
        :readonly="true"
      />
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";
import back from "@/assets/icons/right-arrow (1).png";

const { submittedProducts } = useCart();
</script>
