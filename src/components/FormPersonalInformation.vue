<template>
    <form @submit.prevent="registerStore.verifyForm" id="personalInformation">
        <div class="textForm">
            <h2>Personal Information</h2>
            <p>Please provide your personal details so we can get to know you better.</p>
        </div>
        <div class="ContainerInputs">
            <div class="inputBox">
                <label for="fullName">Full name</label>
                <input type="text" name="fullName" id="fullName" placeholder="Lucas Costa Mendes" minlength="4" required v-model="informations.name">
            </div>
            <div class="inputBox">
                <label for="emailAddres">Email Address</label>
                <input type="email" name="emailAddres" id="emailAddres" placeholder="exemple@email.com" required v-model="informations.email">
            </div>
            <div class="inputBox">
                <label for="phoneNumber">Phone Number</label>
                <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="912345678" required v-model="informations.phone">
            </div>
            <div class="inputBox">
                <label for="portfolio">Portfolio/GitHub Link</label>
                <input type="url" name="portfolio" id="portfolio" placeholder="github.com/exemple" required v-model="informations.portfolio">
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
        @apply px-4 py-8 flex flex-col gap-4 w-full h-full absolute overflow-hidden
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
        @apply flex flex-col gap-2
    }

    label{
        @apply text-sm sm:text-base font-semibold
    }

    input{
        @apply border-2 border-gray-400 p-2 rounded-xl outline-none
    }

    input:focus,input:hover{
        @apply border-orange-500 duration-500
    }
</style>