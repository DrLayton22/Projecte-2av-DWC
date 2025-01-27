import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export const getTasks = () => axios.get(API_URL);
export const getTaskById = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = async (task) => {
  try {
    // Solo creamos la tarea si el título y la descripción no están vacíos
    if (!task.title || !task.description) {
      throw new Error("Both title and description are required.");
    }
    const response = await axios.post(API_URL, task); // Enviamos los datos al servidor
    return response.data; // Retorna la tarea creada
  } catch (error) {
    console.error("Error creando la tarea", error);
    throw error; // Lanza el error si ocurre
  }
};
// Función para actualizar una tarea
export const updateTask = async (task) => {
  try {
    const response = await axios.put(`${API_URL}/${task.id}`, task); // Usamos task.id para especificar qué tarea queremos actualizar
    return response.data; // Retorna la tarea actualizada
  } catch (error) {
    console.error("Error actualizando la tarea", error);
    throw error;
  }
};
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
