<template>
    <li>
        <input type="checkbox" :checked="task.done" @chage="store.toggleDone(task.id)" />
        <span :class="{ done: task.done }">{{ task.text }}</span>
        <button @click="store.removeTask(task.id)">🗑️</button>
    </li>
</template>

<script setup lang="ts">
import type { Task } from '@/types/Task'
import { useTaskStore } from '@/stores/taskStore';

const props = defineProps<{ task: Task }>()
const store = useTaskStore()
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>