<template>
  <div
    v-if="isOpen"
    @click="closeSidebar"
    class="fixed inset-0 bg-black/40 z-40"
  ></div>

  <div
    :class="[
      ' flex flex-col   gap-10  fixed  p-6 top-0 right-0 h-full  w-96 bg-[#FFFFFF] shadow-2xl z-50 transform transition-transform duration-300 ',
      isOpen ? 'translate-x-0' : 'translate-x-full',
    ]"
  >
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-3xl">Корзина</h1>
    </div>

    <component :is="currentView" @orderSubmitted="orderSubmitted = true" />
    <!-- //////////////////////////////   -->
    <!-- <Box /> -->
    <!-- ////////////////////////////// -->
    <!-- <Product @orderSubmitted="orderSubmitted = true" /> -->
    <!-- ////////////////////////////// -->
    <!-- <DoneProduct /> -->
    <!-- ////////////////////////////// -->
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { computed, ref, watch } from "vue";
import { useSidebar } from "@/composables/useSidebar";
import { useCart } from "@/composables/useCart";
// import { useCart } from "@/composables/useCart";
import Box from "@/components/views/SideBar/box.vue";
import Product from "@/components/views/SideBar/product.vue";
import DoneProduct from "@/components/views/SideBar/doneProduct.vue";

const { isOpen, closeSidebar } = useSidebar();
// const { cartItems } = useCart();

// tracking if order is submitted
const orderSubmitted = ref(false);

// Deciding which component is for currentView
const currentView = computed(() => {
  if (orderSubmitted.value) return DoneProduct;
  if (cartItems.value.length > 0) return Product;
  else return Box;
});

const { cartItems } = useCart(); // add tax
watch(
  cartItems,
  (items) => {
    if (items.length > 0) {
      orderSubmitted.value = false;
    }
  },
  { deep: true },
);
// const { isOpen, closeSidebar } = useSidebar();
</script>
