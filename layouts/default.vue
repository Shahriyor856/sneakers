<template>
  <div>
    <AppHeader v-if="showHeader" />
    <NuxtPage />
    <AppSidebar />
  </div>
</template>

<script setup>
const route = useRoute();

const showHeader = computed(() => {
  return route.path !== "/login" && route.path !== "/register";
});
</script>
