<template>
    <div>
        <button v-show="registerStore.currentStep > 1" @click="registerStore.prevStep" :disabled="registerStore.isAnimating">Go Back</button>
        <button class="btnNext" v-show="registerStore.currentStep >= 1 && registerStore.currentStep < 4" :disabled="registerStore.isAnimating" :form="registerStore.currentNameFunctionForm">Next Step</button>
        <button class="btnSubmit" v-show="registerStore.currentStep === 4" @click="registerStore.verifyForm" :disabled="registerStore.isAnimating"> Submit</button>
    </div>
</template>

<script setup lang="ts">
    import { useRegisterStore } from '../stores/Register';

    const registerStore = useRegisterStore()
</script>

<style scoped>
    div{
        @apply grid grid-cols-2 justify-between w-full p-4
    }

    button{
        @apply w-28 p-2 self-center border border-orange-500 rounded-xl text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-500
    }

    .btnNext, .btnSubmit{
        @apply bg-orange-500 text-white col-start-2 justify-self-end hover:bg-white hover:text-orange-500 transition-all duration-500
    }

    button:disabled{
        @apply bg-slate-400 border-gray-700 hover:bg-slate-400 hover:border-gray-700 hover:text-white text-white cursor-not-allowed
    }
</style>