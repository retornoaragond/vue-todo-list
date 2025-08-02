<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="text" placeholder="Whrite the name of the task:" required />
        <button type="submit">Add</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore';

const text = ref<string>('')
const store = useTaskStore()

const handleSubmit = (): void => {
    if (text.value.trim()) {
        store.addTask(text.value)
        text.value = ''
    }
}
</script>
