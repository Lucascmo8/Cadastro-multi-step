<template>
  <HeaderText />
  <MainCard />
</template>

<script setup lang="ts">
  import HeaderText from './components/HeaderText.vue';
  import MainCard from './components/MainCard.vue';
</script>

<style>
  *{
    @apply font-[Poppins,sans-serif]
  }

  #app{
    @apply flex flex-col justify-center items-center
  }
</style>