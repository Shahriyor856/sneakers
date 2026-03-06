<template>
  <div
    class="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 shadow-xl border border-[#C4C4C4] rounded-2xl lg:rounded-3xl xl:rounded-4xl"
  >
    <div class="relative">
      <div v-if="!props.readonly" class="absolute top-0 left-0 cursor-pointer">
        <div
          :class="[
            'flex justify-center items-center  w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12  rounded-md lg:rounded-xl xl:rounded-2xl border',
            liked ? 'bg-[#FEF0F0] border-0' : 'border-[#C4C4C4]',
          ]"
        >
          <button
            @click="toggleLike"
            class="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 cursor-pointer"
          >
            <img :src="liked ? likeRed : like" alt="like" />
          </button>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <div
          class="w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 h-20 sm:h-28 md:h-36 lg:h-44 xl:h-52"
        >
          <img
            :src="malumot.image"
            alt="product"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center gap-2 md:gap-3 xl:gap-5">
      <div>
        <h1 class="text-sm md:text-base lg:text-lg xl:text-2xl leading-tight">
          {{ malumot.text }}
        </h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <p class="text-sm lg:text-base xl:text-xl text-[#BDBDBD]">Цена:</p>
          <p
            class="text-sm md:text-base lg:text-lg xl:text-2xl font-medium md:font-semibold xl:font-bold"
          >
            {{ malumot.price }} руб.
          </p>
        </div>
        <div>
          <button
            v-if="!props.readonly"
            :class="[
              'flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-md lg:rounded-xl xl:rounded-2xl border  border-[#D3D3D3] cursor-pointer ',
              cliked ? 'bg-[#63DC79] border-0' : 'border-[#C4C4C4]',
            ]"
            @click="toggleCliked"
          >
            <div>
              <img
                :src="cliked ? tick : plus"
                alt="plus/tick"
                class="w-2 sm:w-2 md:w-3 lg:w-4 xl:w-5 h-2 sm:h-2 md:h-3 lg:h-4 xl:h-5"
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
  readonly: { type: Boolean, default: false },
});

// 🔹 destructure everything from one call
const { cartItems, likedItems, addToCart, removeFromCart, toggleLiked } =
  useCart();

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

watch(
  likedItems,
  (newLikedCart) => {
    const exists = newLikedCart.find((p) => p.text === props.malumot.text);
    liked.value = !!exists;
  },
  {
    deep: true,
    immediate: true,
  },
);

// toggle heart

function toggleLike() {
  if (props.readonly) return;
  toggleLiked(props.malumot);
}

// toggle “+” / check and add to cart
function toggleCliked() {
  if (props.readonly) return;
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
    removeFromCart(props.malumot);
  }
}
</script>
