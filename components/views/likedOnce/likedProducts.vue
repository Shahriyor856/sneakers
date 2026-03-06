<template>
  <div
    class="flex justify-start items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10"
  >
    <NuxtLink
      to="/"
      class="border-[#C4C4C4] rounded-sm md:rounded-lg xl:rounded-xl w-4 md:w-6 lg:w-8 xl:w-10 h-4 md:h-6 lg:h-8 xl:h-10"
      ><button
        class="flex justify-center items-center w-6 sm:w-8 md:w-10 lg:w-10 xl:w-12 h-6 sm:h-8 md:h-10 lg:h-10 xl:h-12 rounded-2xl border border-[#D3D3D3] cursor-pointer"
      >
        <img
          :src="back"
          alt="back"
          class="w-2 md:w-3 xl:w-5 h-2 md:h-3 xl:h-5"
        /></button
    ></NuxtLink>
    <h1
      class="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-5xl font-medium md:font-semibold xl:font-bold"
    >
      Мои закладки
    </h1>
  </div>

  <div
    class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-16"
  >
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
