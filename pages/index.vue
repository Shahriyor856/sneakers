<template>
  <div class="flex flex-col gap-16 w-full p-16 bg-[#FFFFFF] rounded-b-[25px]">
    <el-carousel trigger="hover" height="500px" class="rounded-3xl">
      <el-carousel-item v-for="(item, index) in data" :key="index">
        <img
          :src="item.image"
          alt="image"
          class="w-full h-full object-center object-fill"
        />
      </el-carousel-item>
    </el-carousel>

    <div class="flex justify-between">
      <div>
        <h1 class="font-bold text-5xl">Все кроссовки</h1>
      </div>
      <div
        class="w-80 h-12 flex justify-center items-center rounded-xl border-[#C4C4C4] border"
      >
        <div class="w-[20%] h-full flex justify-center items-center">
          <img :src="search" alt="icon" class="w-6 h-6" />
        </div>
        <input
          type="text"
          placeholder="Поиск..."
          class="w-[80%] h-full text-[#C4C4C4] outline-none"
        />
      </div>
    </div>

    <div class="grid grid-cols-4 gap-16">
      <div v-for="(item, index) in productData" :key="index">
        <ProductUI
          :malumot="{
            image: item.image,
            text: item.text,
            price: item.price,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { data } from "@/constants/carusel";
import search from "@/assets/icons/search.png";
import { productData } from "@/constants/product";
</script>
