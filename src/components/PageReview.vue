<template>
    <div id="reviewContainer">
        <div class="textReview">
            <h2>Review and Confirm</h2>
            <p>Please review your information to make sure everything is accurate.</p>
        </div>
        <div class="ContainerOutputs">
            <div class="answerBox">
                <h3>Full Name</h3>
                <p class="name">{{ informations.name }}</p>
            </div>
            <div class="answerBox">
                <h3>Email Address</h3>
                <p>{{ informations.email }}</p>
            </div>
            <div class="answerBox">
                <h3>Phone Number</h3>
                <p>{{ informations.phone }}</p>
            </div>
            <div class="answerBox">
                <h3>Portfolio/GitHub Link</h3>
                <p>{{ informations.portfolio }}</p>
            </div>
            <div class="answerBox">
                <h3>Skill Level</h3>
                <p>{{ informations.skillLevel }}</p>
            </div>
            <div class="answerBox">
                <h3>Challenge Preference</h3>
                <p>{{ informations.challenge.join(', ') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRegisterStore } from '../stores/Register';

    const informations = useRegisterStore().studentInformations
</script>

<style scoped>
    #reviewContainer{
        @apply px-4 py-8 flex flex-col gap-4 w-full h-full absolute
    }

    .textReview{
        @apply flex flex-col gap-2
    }

    h2{
        @apply text-xl sm:text-2xl font-semibold
    }

    p{
        @apply text-sm text-gray-700 break-words
    }

    .name{
        @apply capitalize
    }

    .ContainerOutputs{
        @apply grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 overflow-auto
    }

    *::-webkit-scrollbar{
        @apply w-2 ml-2
    }

    *::-webkit-scrollbar-track {
        @apply bg-gray-200 rounded-lg
    }

    *::-webkit-scrollbar-thumb {
        @apply bg-orange-500 rounded-lg
    }
    .answerBox{
        @apply bg-gray-200 p-3 rounded-xl shadow-sm mr-1 
    }

    h3{
        @apply text-xs text-slate-600
    }

    .answerBox > p{
        @apply text-xs font-semibold mt-1
    }
</style>