<template>
  <div
    class="w-full p-4 sm:p-5 md:p-6 lg:p-8 xl:p-16 bg-[#FFFFFF] rounded-t-[15px] md:rounded-t-[20px] xl:rounded-t-[25px] border-[#EAEAEA] border-b md:border-b-2 xl:border-b-2"
  >
    <div
      class="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center xl:flex-row xl:justify-between xl:items-center"
    >
      <div class="flex items-center gap-2 sm:gap-3 md:gap-4 xl:gap-5">
        <div
          class="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
        >
          <img
            :src="logo"
            alt="image"
            class="h-full w-full rounded-[50%] object-cover"
          />
        </div>
        <div class="flex flex-col">
          <h1
            class="font-medium md:font-semibold xl:font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl leading-tight"
          >
            REACT SNEAKERS
          </h1>
          <p
            class="text-[#9D9D9D] text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl"
          >
            Магазин лучших кроссовок
          </p>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center justify-start sm:justify-center lg:justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14"
      >
        <button
          @click="openSidebar"
          class="flex items-center gap-2 sm:gap-2 md:gap-3 xl:gap-4 cursor-pointer"
        >
          <div
            class="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
          >
            <img
              :src="karzinka"
              alt="karzinka"
              class="h-full w-full object-cover"
            />
          </div>
          <p
            class="hidden sm:block text-[#5C5C5C] font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl"
          >
            1205 руб.
          </p>
        </button>

        <AppSidebar />
        <NuxtLink to="/LikedPr">
          <button
            class="flex items-center gap-2 sm:gap-2 md:gap-3 xl:gap-4 cursor-pointer"
          >
            <div
              class="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
            >
              <img
                :src="like"
                alt="icon"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <p
              class="hidden sm:block text-[#5C5C5C] font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl"
            >
              Закладки
            </p>
          </button>
        </NuxtLink>
        <NuxtLink to="/login">
          <div
            class="flex items-center gap-2 sm:gap-2 md:gap-3 xl:gap-4 cursor-pointer"
          >
            <div
              class="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
            >
              <img
                :src="profile"
                alt="icon"
                class="h-full w-full object-cover"
              />
            </div>
            <p
              class="hidden sm:block text-[#5C5C5C] font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl"
            >
              Login Page
            </p>
          </div>
        </NuxtLink>
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
