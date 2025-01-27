<template>
  <div>
    <h1>Task Manager</h1>
    <button @click="goToNewTask">Add New Task</button>
    <TaskList @edit-task="goToEditTask" />
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';

export default {
  components: { TaskList },
  methods: {
    goToNewTask() {
      this.$router.push('/edit/new'); // Navegar a la vista de crear nova tasca
    },
    goToEditTask(taskId) {
      this.$router.push(`/edit/${taskId}`); // Navegar a la vista d'editar una tasca
    },
  },
};
</script>

<style>
/* Estil bàsic */
button {
  margin-bottom: 20px;
}
</style>
