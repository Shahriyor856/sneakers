<template>
  <div
    class="w-full p-16 bg-[#FFFFFF] rounded-t-[25px] border-[#EAEAEA] border-b-2"
  >
    <div class="flex justify-between items-center">
      <div class="flex gap-5 items-center">
        <div class="w-16 h-16">
          <img
            :src="logo"
            alt="image"
            class="h-full w-full rounded-[50%] object-cover"
          />
        </div>
        <div class="flex flex-col">
          <h1 class="font-bold text-3xl">REACT SNEAKERS</h1>
          <p class="text-[#9D9D9D] text-xl">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div class="flex items-center justify-center gap-14">
        <button
          @click="openSidebar"
          class="flex justify-center items-center gap-4 cursor-pointer"
        >
          <div class="w-8 h-8">
            <img
              :src="karzinka"
              alt="karzinka"
              class="h-full w-full object-cover"
            />
          </div>
          <p class="text-[#5C5C5C] font-medium text-xl">1205 руб.</p>
        </button>

        <AppSidebar />
        <NuxtLink to="/LikedPr">
          <button class="flex justify-center items-center gap-4 cursor-pointer">
            <div class="w-8 h-8">
              <img
                :src="like"
                alt="icon"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <p class="text-[#5C5C5C] font-medium text-xl">Закладки</p>
          </button>
        </NuxtLink>
        <div class="flex justify-center items-center gap-4 cursor-pointer">
          <div class="w-8 h-8">
            <img :src="profile" alt="icon" class="h-full w-full object-cover" />
          </div>
          <p class="text-[#5C5C5C] font-medium text-xl">Профиль</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/images/logo.png";
import karzinka from "@/assets/icons/cart.png";
import like from "@/assets/icons/heart.png";
import profile from "@/assets/icons/user.png";

import { useSidebar } from "@/composables/useSidebar"; // <== exact casing

const { openSidebar } = useSidebar();
</script>
