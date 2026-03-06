<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex flex-col gap-2 md:gap-2 lg:gap-4 xl:gap-6">
      <ProductUITwo
        v-for="(item, index) in cartItems"
        :key="index"
        :malumot="item"
      />
    </div>
    <div class="flex flex-col gap-2 md:gap-3 xl:gap-5">
      <div class="flex justify-between">
        <h1 class="text-[6px] md:text-[8px] lg:text-sm xl:text-base">Итого:</h1>
        <h1 class="text-[6px] md:text-[8px] lg:text-sm xl:text-base">
          {{ totalPrice }} руб.
        </h1>
      </div>
      <div class="flex justify-between">
        <h1 class="text-[6px] md:text-[8px] lg:text-sm xl:text-base">Налог:</h1>
        <h1 class="text-[6px] md:text-[8px] lg:text-sm xl:text-base">
          {{ tax }} руб.
        </h1>
      </div>
      <div>
        <AppButton label="Оформить заказ" @click="submitOrder" />
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useCart } from "@/composables/useCart";
const { cartItems, totalPrice, tax, submitCart } = useCart();

const emit = defineEmits(["orderSubmitted"]);

const submitOrder = () => {
  submitCart();
  emit("orderSubmitted");
};
// const { cartItems, totalPrice, tax } = useCart();
</script>
