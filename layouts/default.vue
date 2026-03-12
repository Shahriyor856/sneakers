<template>
  <div>
    <AppHeader v-if="showHeader" />
    <slot />
    <AppSidebar v-if="showHeader" />
  </div>
</template>

<script setup>
const route = useRoute();

const hiddenRoutes = ["/login", "/register", "/verify-email"];

const showHeader = computed(() => {
  return !hiddenRoutes.includes(route.path);
});
</script>