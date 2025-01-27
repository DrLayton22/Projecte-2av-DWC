<template>
  <div class="form-container">
    <h1>Create Task</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="task.title" id="title" type="text" required placeholder="Enter task title" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="task.description" id="description" required placeholder="Enter task description"></textarea>
      </div>
      <div class="form-group">
        <label for="completed">
          <input type="checkbox" v-model="task.completed" /> Completed
        </label>
      </div>
      <button type="submit">Create Task</button>
    </form>
  </div>
</template>

<script>
import { createTask } from "@/services/taskService"; // Asegúrate de tener la función para crear tareas

export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
        completed: false,
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const newTask = await createTask(this.task); // Crear la tarea en la API
        this.$router.push("/"); // Redirigimos a la lista de tareas después de crearla
      } catch (error) {
        console.error("Error al crear la tarea", error);
      }
    },
  },
};
</script>


<style scoped>
.form-container {
  color: black;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: inline-block;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  height: 120px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
