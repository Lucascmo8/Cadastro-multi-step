<template>
    <form @submit.prevent="registerStore.verifyForm" id="skillLevel">
        <div class="textForm">
            <h2>Skill Level</h2>
            <p>Please tell us about your skill level in frontend development.</p>
        </div>
        <div class="ContainerInputs">
            <div class="inputBox" >
                <input type="radio" name="skillLevel" id="beginner" value="Beginner" v-model="informations.skillLevel" required>
                <div class="label" id="labelBeginner">
                    <i class="uil uil-pagelines"></i>
                    <label for="beginner">Beginner</label>
                </div>
            </div>
            <div class="inputBox">
                <input type="radio" name="skillLevel" id="intermediate" value="Intermediate" v-model="informations.skillLevel" required>
                <div class="label" id="labelIntermediate">
                    <i class="uil uil-compass"></i>
                    <label for="intermediate">Intermediate</label>
                </div>
            </div>
            <div class="inputBox">
                <input type="radio" name="skillLevel" id="advanced" value="Advanced" v-model="informations.skillLevel" required>
                <div class="label" id="labelAdvanced">
                    <i class="uil uil-rocket"></i>
                    <label for="advanced">Advanced</label>
                </div>
            </div>
            <div class="inputBox">
                <input type="radio" name="skillLevel" id="expert" value="Expert" v-model="informations.skillLevel" required>
                <div class="label" id="labelExpert">
                    <i class="uil uil-trophy"></i>
                    <label for="expert">Expert</label>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
    import { useRegisterStore } from '../stores/Register';

    const registerStore = useRegisterStore()

    const informations = useRegisterStore().studentInformations
</script>

<style scoped>
    form{
        @apply px-4 py-8 flex flex-col gap-4 w-full h-full absolute
    }

    .textForm{
        @apply flex flex-col gap-2
    }

    h2{
        @apply text-xl sm:text-2xl font-semibold
    }

    p{
        @apply text-sm text-gray-700
    }
    
    .ContainerInputs{
        @apply grid grid-cols-2 gap-6 sm:gap-8
    }

    .inputBox{
        @apply flex items-center
    }

    .label{
        @apply flex items-center align-middle gap-2  border-2 border-gray-400 py-4 px-2 sm:p-4 rounded-xl w-full
    }

    label{
        @apply text-sm sm:text-base font-semibold
    }

    #beginner:checked ~ #labelBeginner,
    #intermediate:checked ~ #labelIntermediate,
    #advanced:checked ~ #labelAdvanced,
    #expert:checked ~ #labelExpert{
        @apply border-2 border-orange-500 text-orange-500 transition-all duration-500
    }

    i{
        @apply bg-orange-500 w-8 h-8 p-2 rounded-full text-white text-lg align-middle flex justify-center
    }

    input{
        @apply hidden
    }
</style>