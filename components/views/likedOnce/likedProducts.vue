<template>
  <div class="flex justify-start items-center gap-10">
    <NuxtLink to="/" class="border-[#C4C4C4] rounded-[20px] w-10 h-10"
      ><button
        class="flex justify-center items-center w-12 h-12 rounded-2xl border border-[#D3D3D3] cursor-pointer"
      >
        <img :src="back" alt="back" class="w-5 h-5" /></button
    ></NuxtLink>
    <h1 class="text-5xl font-bold">Мои закладки</h1>
  </div>

  <div class="grid grid-cols-4 gap-16">
    <ProductUI
      v-for="(item, index) in likedItems"
      :key="index"
      :malumot="item"
      :readonly="true"
    />
  </div>
</template>

<script setup>
import back from "@/assets/icons/right-arrow (1).png";

defineProps(["likedItems"]);
</script>
