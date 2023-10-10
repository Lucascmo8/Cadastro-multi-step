<template>
    <summary>
        <span :class="[registerStore.currentStep >= 1 ? 'active' : '']">1</span>
        <div :class="[registerStore.currentStep > 1 ? 'active' : '']"></div>
        <span :class="[registerStore.currentStep >= 2 ? 'active' : '']">2</span>
        <div :class="[registerStore.currentStep > 2 ? 'active' : '']"></div>
        <span :class="[registerStore.currentStep >= 3 ? 'active' : '']">3</span>
        <div :class="[registerStore.currentStep > 3 ? 'active' : '']"></div>
        <span :class="[registerStore.currentStep >= 4 ? 'active' : '']">4</span>
    </summary>
</template>

<script setup lang="ts">
    import { useRegisterStore } from '../stores/Register';

    const registerStore = useRegisterStore()
</script>

<style scoped>
    summary{
        @apply flex justify-around items-center gap-4 p-2 py-4
    }

    span{
        @apply  w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 text-sm shrink-0 flex items-center justify-center
    }

    div{
        @apply w-full max-w-[110px] h-2 bg-slate-300 rounded-3xl
    }

    .active{
        @apply bg-orange-500 text-white font-medium
    }

    span,div{
        @apply transition-all ease-linear duration-[2s]
    }
</style>