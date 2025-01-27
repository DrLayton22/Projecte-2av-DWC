<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="logo">Task Manager</router-link>
        <router-link to="/create" class="btn">Create Task</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Global */
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f6f8;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Barra de navegació */
header {
  background-color: #4CAF50;
  padding: 10px 20px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav .btn {
  padding: 8px 16px;
  background-color: white;
  color: #4CAF50;
  border: 2px solid #4CAF50;
  border-radius: 4px;
  text-decoration: none;
}

nav .btn:hover {
  background-color: #4CAF50;
  color: white;
}

/* Contingut principal */
main {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estils per a les vistes */
.container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

button {
  cursor: pointer;
  border: none;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

h1, h3 {
  font-size: 28px;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
