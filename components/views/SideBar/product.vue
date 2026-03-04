<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex flex-col gap-6">
      <ProductUITwo
        v-for="(item, index) in cartItems"
        :key="index"
        :malumot="item"
      />
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex justify-between">
        <h1>Итого:</h1>
        <h1>{{ totalPrice }} руб.</h1>
      </div>
      <div class="flex justify-between">
        <h1>Налог:</h1>
        <h1>{{ tax }} руб.</h1>
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
const { cartItems, totalPrice, tax } = useCart(); // add tax

const { clearCart } = useCart();

const emit = defineEmits(["orderSubmitted"]);

const submitOrder = () => {
  emit("orderSubmitted"); // first tell parent
  clearCart(); // then clear
};
// const { cartItems, totalPrice, tax } = useCart();
</script>
