<template>
  <div class="flex flex-col justify-center h-full items-center gap-8">
    <div class="w-32 h-32">
      <img :src="box" alt="box" class="w-full h-full" />
    </div>
    <div class="flex flex-col justify-center items-center gap-5">
      <h1 class="text-2xl font-semibold">Корзина пустая</h1>
      <p class="text-[#5C5C5C] text-lg text-center">
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
