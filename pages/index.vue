<template>
  <div
    class="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-16 w-full p-4 sm:p-5 md:p-6 lg:p-8 xl:p-16 bg-[#FFFFFF] rounded-b-[25px]"
  >
    <el-carousel
      trigger="hover"
      height="500px"
      class="rounded-3xl hidden md:block xl:block"
    >
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
        <h1 class="font-bold text-sm md:text-lg lg:text-2xl xl:text-5xl">
          Все кроссовки
        </h1>
      </div>
      <div
        class="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-6 md:h-8 lg:h-10 xl:h-12 flex justify-center items-center rounded-sm lg:rounded-lg xl:rounded-xl border border-[#C4C4C4]"
      >
        <div class="w-[18%] sm:w-[20%] h-full flex justify-center items-center">
          <img
            :src="search"
            alt="icon"
            class="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
          />
        </div>

        <input
          type="text"
          placeholder="Поиск..."
          class="w-[82%] sm:w-[80%] h-full text-[#C4C4C4] text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg outline-none bg-transparent"
        />
      </div>
    </div>

    <div
      class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-16"
    >
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
// import { ref, onMounted } from "vue";
// import axios from "axios";
import { data } from "@/constants/carusel";
import search from "@/assets/icons/search.png";
import { productData } from "@/constants/product";

// await navigateTo("/login");
// const products = ref([]);

// async function getProducts() {
//   try {
//     const response = await axios.get(
//       "https://muhammadsodiq.das-uty.uz/api/v1/products",
//     );

//     products.value = response.data;

//     console.log(response.data);
//   } catch (error) {
//     console.error("API error is here look !!!", error);
//   }
// }

// onMounted(() => {
//   getProducts();
// });
</script>
