<template>
  <div
    class="flex flex-col p-10 shadow-xl border border-[#C4C4C4] rounded-[50px]"
  >
    <div class="relative">
      <!-- It is what i want to move -->
      <div class="absolute top-0 left-0 cursor-pointer">
        <div
          :class="[
            'flex justify-center items-center w-12 h-12 rounded-2xl border',
            liked ? 'bg-[#FEF0F0] border-0' : 'border-[#C4C4C4]',
          ]"
        >
          <button @click="toggleLike" class="w-6 h-6 cursor-pointer">
            <img :src="liked ? likeRed : like" alt="like" />
          </button>
        </div>
      </div>
      <!-- It is what will be back  -->
      <div class="flex justify-center items-center">
        <div class="w-52 h-52">
          <img :src="malumot.image" alt="product" class="w-full h-full" />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center gap-5">
      <div>
        <h1 class="text-2xl">{{ malumot.text }}</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <p class="text-xl text-[#BDBDBD]">Цена:</p>
          <p class="text-2xl font-bold">{{ malumot.price }} руб.</p>
        </div>
        <div>
          <button
            :class="[
              'flex justify-center items-center w-12 h-12 rounded-2xl border  border-[#D3D3D3] cursor-pointer ',
              cliked ? 'bg-[#63DC79] border-0' : 'border-[#C4C4C4]',
            ]"
            @click="toggleCliked"
          >
            <div>
              <img
                :src="cliked ? tick : plus"
                alt="plus/tick"
                class="w-5 h-5"
              />
            </div>

            <!-- <div>
              <img :src="plus" alt="here" class="w-16 h-16" />
            </div> -->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import like from "@/assets/icons/heart.png";
import likeRed from "@/assets/icons/hearted.png";
import plus from "@/assets/icons/plus.png";
import tick from "@/assets/icons/check.png";
import { useCart } from "@/composables/useCart";

// const { addToCart } = useCart();

const props = defineProps({
  malumot: {
    type: Object,
    required: true,
  },
});

// 🔹 destructure everything from one call
const { cartItems, addToCart, removeFromCart } = useCart();

const liked = ref(false);
const cliked = ref(false);

// 🔹 watch the cartItems to sync button
watch(
  cartItems,
  (newCart) => {
    const exists = newCart.find((p) => p.text === props.malumot.text);
    cliked.value = !!exists; // button reflects cart
  },
  { deep: true, immediate: true },
);

// toggle heart
function toggleLike() {
  liked.value = !liked.value;
}

// toggle “+” / check and add to cart
function toggleCliked() {
  cliked.value = !cliked.value;

  if (cliked.value) {
    // add to cart
    addToCart({
      image: props.malumot.image,
      text: props.malumot.text,
      price: Number(props.malumot.price), // always number
    });
  } else {
    // remove from cart if unchecked
    cartItems.value = cartItems.value.filter(
      (p) => p.text !== props.malumot.text,
    );
  }
}
</script>
