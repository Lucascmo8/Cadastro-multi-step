<template>
  <div>
    <img src="../../public/congratulation.svg" alt="">
    <h2>Congratulations! 🎉</h2>
    <p>Your profile has been created and you are now ready to start participating in challenges that match your interests and coding experience level.</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    div{
        @apply flex flex-col justify-center items-center p-9 text-center gap-4 h-full w-full
    }

    img{
        @apply w-36 h-36
    }

    h2{
        @apply font-semibold text-2xl
    }

    p{
        @apply text-sm text-gray-400
    }
</style>