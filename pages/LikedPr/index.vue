<template>
  <div class="flex flex-col w-full gap-16 p-16 bg-[#FFFFFF] rounded-b-[25px]">
    <template v-if="likedItems.length > 0">
      <LikedProducts :likedItems="likedItems" />
    </template>
    <template v-else>
      <noneProducts />
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import noneProducts from "~/components/views/likedOnce/noneProducts.vue";
import { useCart } from "@/composables/useCart";

const orderSubmitted = ref(false);
const { likedItems } = useCart();

watch(
  likedItems,
  (items) => {
    if (items.length > 0) {
      orderSubmitted.value = false;
    }
  },
  { deep: true },
);
</script>
