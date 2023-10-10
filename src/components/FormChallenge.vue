<template>
    <form @submit.prevent="registerStore.verifyForm" id="challenge">
        <div class="textForm">
            <h2>Challenge Preference</h2>
            <p>Please tell us which frontend challenges you would like to participate in.</p>
        </div>
        <div class="ContainerInputs">
            <div class="inputBox" :class="[informations.challenge.includes(values[0]) ? 'active' : '']">
                <input type="checkbox" name="challenges" id="base" value="HTML/CSS/JS" v-model="informations.challenge">
                <label for="base">HTML/CSS/JS</label>
            </div>
            <div class="inputBox" :class="[informations.challenge.includes(values[1]) ? 'active' : '']">
                <input type="checkbox" name="challenges" id="react" value="React.JS" v-model="informations.challenge">
                <label for="react">React.JS</label>
            </div>
            <div class="inputBox" :class="[informations.challenge.includes(values[2]) ? 'active' : '']">
                <input type="checkbox" name="challenges" id="angular" value="Angular.JS" v-model="informations.challenge">
                <label for="angular">Angular.JS</label>
            </div>
            <div class="inputBox" :class="[informations.challenge.includes(values[3]) ? 'active' : '']">
                <input type="checkbox" name="challenges" id="vue" value="Vue.JS" v-model="informations.challenge">
                <label for="vue">Vue.JS</label>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
    import { useRegisterStore } from '../stores/Register';
    import { ref } from 'vue';

    const registerStore = useRegisterStore()

    const informations = useRegisterStore().studentInformations

    const values = ref<string[]>(["HTML/CSS/JS","React.JS","Angular.JS","Vue.JS"])
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
        @apply flex items-center align-middle gap-2 border-2 text-sm sm:text-base font-semibold border-gray-400 p-4 rounded-xl w-full
    }

    .active{
        @apply border-orange-500
    }

    input{
        @apply h-5 w-5 rounded-lg accent-orange-600 
    }

    input:checked ~ label{
        @apply text-orange-500
    }
</style>