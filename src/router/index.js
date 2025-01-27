import TaskList from "@/components/TaskList.vue";
import TaskCreateView from "@/views/TaskCreateView.vue";
import TaskEditView from "@/views/TaskEditView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: TaskList },
  { path: "/create", component: TaskCreateView },
  { path: "/edit/:id", component: TaskEditView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
