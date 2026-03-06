<template>
  <button
    class="w-full h-6 md:h-9 lg:h-11 xl:h-14 rounded-[20px] bg-[#9DD458] text-white cursor-pointer"
  >
    <p class="text-[8px] md:text-sm xl:text-lg text-center">{{ label }}</p>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
