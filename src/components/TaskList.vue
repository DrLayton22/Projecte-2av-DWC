<template>
  <div class="container">
    <h1>Task List</h1>
    <div class="task-list">
      <div v-for="task in tasks" :key="task.id" class="task-card">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <div class="task-actions">
          <button @click="$router.push(`/edit/${task.id}`)">Edit</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </div>
      </div>
    </div>
    <router-link to="/create" class="btn">Create New Task</router-link>
  </div>
</template>

<script>
import { getTasks, deleteTask } from "@/services/taskService";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    const response = await getTasks();
    this.tasks = response.data;
  },
  methods: {
    async deleteTask(id) {
      await deleteTask(id);
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
};
</script>

<style scoped>
.task-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.task-card {
  color: black;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.task-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.task-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

button {
  padding: 8px 12px;
  font-size: 14px;
}

button:first-child {
  background-color: #4CAF50;
  color: white;
}

button:nth-child(2) {
  background-color: #f44336;
  color: white;
}

button:hover {
  opacity: 0.8;
}
</style>
