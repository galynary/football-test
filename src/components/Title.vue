<template>
  <section class="title-section">
    <h2 class="title">{{ title }}</h2>
  </section>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
<style lang="scss" scoped>
@use "../assets/components/title";
</style>
