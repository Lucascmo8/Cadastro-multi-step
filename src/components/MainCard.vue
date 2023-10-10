<template>
    <main>
        <Transition :name="registerStore.animateName" >
            <IndexStep v-if="registerStore.currentStep <= 4"/>
        </Transition>
        <Transition :name="registerStore.animateName">
            <hr v-if="registerStore.currentStep <= 4">
        </Transition>
        <div class="containerForm">
            <Transition :name="registerStore.animateName">
                <FormPersonalInformation v-if="registerStore.currentStep == 1"/>
            </Transition>
            <Transition :name="registerStore.animateName">
                <FormSkillLevel v-if="registerStore.currentStep == 2"/>
            </Transition>
            <Transition :name="registerStore.animateName">
                <FormChallenge v-if="registerStore.currentStep == 3"/>
            </Transition>
            <Transition :name="registerStore.animateName">
                <PageReview v-if="registerStore.currentStep == 4"/>
            </Transition>
            <Transition :name="registerStore.animateName">
                <PageCongratulations v-if="registerStore.currentStep == 5"/>
            </Transition>
        </div>
        <Transition :name="registerStore.animateName">
            <hr v-if="registerStore.currentStep <= 4">
        </Transition>
        <Transition :name="registerStore.animateName">
            <ButtonsSteps v-if="registerStore.currentStep <= 4"/>
        </Transition>
    </main>
</template>

<script setup lang="ts">
    import IndexStep from './IndexStep.vue';
    import ButtonsSteps from './ButtonsSteps.vue';
    import FormPersonalInformation from './FormPersonalInformation.vue';
    import FormSkillLevel from './FormSkillLevel.vue';
    import FormChallenge from './FormChallenge.vue';
    import PageReview from './PageReview.vue'
    import PageCongratulations from './PageCongratulations.vue'
    import { useRegisterStore } from '../stores/Register';

    const registerStore = useRegisterStore()
</script>

<style>
    main{
        @apply h-[450px] w-full sm:w-[640px] sm:rounded-2xl bg-white shadow-lg flex flex-col overflow-hidden border mt-4
    }

    .containerForm{
        @apply relative w-full h-full overflow-hidden
    }
    
    /* Animação Slide */

    .slideBack-enter-active,
    .slide-enter-active {
        opacity: 0;
        transition: all 2s ease-in;
    }

    .slide-enter-to,
    .slideBack-enter-to {
        opacity: 1;
        transition: all 2s ease-in;
        transform: translatex(0);
    }

    .slide-leave-active,
    .slide-leave-to,
    .slideBack-enter-from {
        opacity: 0;
        transition: all 2s ease-in;
        transform: translateX(-100%);
    }

    .slide-enter-from,
    .slideBack-leave-active,
    .slideBack-leave-to {
        opacity: 1;
        transition: all 2s ease-in;
        transform: translateX(100%);
    }
</style>