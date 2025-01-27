<template>
  <div class="form-container">
    <h1>Edit Task</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="task.title" id="title" type="text" required placeholder="Enter task title" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="task.description" id="description" required placeholder="Enter task description"></textarea>
      </div>
      <div class="form-group checkbox-group">
        <label for="completed">
          <input type="checkbox" v-model="task.completed" /> Completed
        </label>
      </div>
      <button type="submit">Update Task</button>
    </form>
  </div>
</template>

<script>
import { getTaskById, updateTask } from "@/services/taskService"; // Asegúrate de tener las funciones correctas
import { ref, onMounted } from "vue";

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
  async created() {
    const taskId = this.$route.params.id; // Obtenemos el ID de la URL
    const response = await getTaskById(taskId); // Obtenemos los datos de la tarea desde la API
    this.task = response.data; // Inicializamos el formulario con la tarea
  },
  methods: {
    async onSubmit() {
      try {
        const updatedTask = await updateTask(this.task); // Llamamos a la función para actualizar la tarea
        this.$router.push("/"); // Redirigimos a la lista de tareas después de actualizar
      } catch (error) {
        console.error("Error al actualizar la tarea", error);
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  color: black;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
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

/* Coloca la casilla de completado en línea con el texto */
.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  font-weight: normal;
}

.checkbox-group input {
  margin-right: 10px;
}
</style>
