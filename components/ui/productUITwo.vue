<template>
  <div class="flex gap-5 p-5 shadow-xl border border-[#C4C4C4] rounded-[25px]">
    <div class="relative">
      <!-- It is what i want to move -->

      <!-- It is what will be back  -->
      <div class="flex justify-center items-center">
        <div class="w-20 h-20">
          <img :src="malumot.image" alt="product" class="w-full h-full" />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div>
        <h1 class="text-base">{{ malumot.text }}</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <p class="text-sm font-medium">{{ malumot.price }} руб.</p>
        </div>
        <div>
          <button
            class="flex justify-center items-center w-8 h-8 rounded-[10px] border border-[#D3D3D3] cursor-pointer"
          >
            <div @click="handleRemove">
              <img :src="close" class="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import close from "@/assets/icons/close.png";
import { useCart } from "@/composables/useCart";

const props = defineProps({
  malumot: {
    item: Object,
    required: true,
  },
});

const { removeFromCart } = useCart();

function handleRemove() {
  removeFromCart({
    text: props.malumot.text,
  });
}

const cliked = ref(false);

// function toggleCliked() {
//   cliked.value = !cliked.value;
// }
</script>

<style scoped></style>
