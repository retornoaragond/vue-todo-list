<script setup lang="ts">
import TaskForm from "@/components/TaskForm.vue";
import TaskItem from "@/components/TaskItem.vue";
import { useTaskStore } from "@/stores/taskStore";

const store = useTaskStore()
store.loadTasks();
</script>

<template>
  <h1>
    My Tasks
  </h1>
  <TaskForm />
  <ul>
    <TaskItem v-for="task in store.tasks" :key="task.id" :task="task" />
  </ul>
</template>
