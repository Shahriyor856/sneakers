<template>
  <button
    class="w-full h-14 rounded-[20px] bg-[#9DD458] text-white cursor-pointer"
  >
    {{ label }}
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
