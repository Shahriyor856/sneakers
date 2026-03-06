<template>
  <div
    class="flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 p-1 md:p-3 xl:p-5 shadow-xl border border-[#C4C4C4] rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl"
  >
    <div class="relative">
      <!-- It is what i want to move -->

      <!-- It is what will be back  -->
      <div class="flex justify-center items-center">
        <div
          class="w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 h-6 sm:h-8 md:h-12 lg:h-16 xl:h-20"
        >
          <img :src="malumot.image" alt="product" class="w-full h-full" />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div>
        <h1 class="text-[6px] md:text-sm xl:text-base">{{ malumot.text }}</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <p class="text-[4px] md:text-[6px] xl:text-sm font-medium">
            {{ malumot.price }} руб.
          </p>
        </div>
        <div>
          <button
            class="flex justify-center items-center w-3 sm:w-3 md:w-4 lg:w-6 xl:w-8 h-3 sm:h-3 md:h-4 lg:h-6 xl:h-8 rounded-sm md:rounded-lg xl:rounded-xl border border-[#D3D3D3] cursor-pointer"
          >
            <div @click="handleRemove">
              <img :src="close" class="w-1 md:w-2 xl:w-4 h-1 md:h-2 xl:h-4" />
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
