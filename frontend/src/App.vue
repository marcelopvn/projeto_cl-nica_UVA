<template>
  <div id="app-container">
    <header class="app-header">
      <h1>Sistema de Atendimento Inteligente</h1>
      <nav>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Cadastro</router-link>
        <router-link to="/painel">Painel</router-link>
      </nav>
    </header>
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<style>

:root {
  --primary-color: #007bff;
  --primary-hover: #0056b3;
  --secondary-color: #f8f9fa;
  --border-color: #dee2e6;
  --text-color: #333;
  --background-color: #fff;
  --card-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  background-color: #f4f7f6;
  color: var(--text-color);
}

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
}

/* Estilos do Cabeçalho e Rodapé */
.app-header {
  background-color: var(--background-color);
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header h1 {
  margin: 0;
  font-size: 1.5em;
  color: var(--primary-color);
}

.app-header nav a {
  margin: 0 10px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.app-header nav a:hover {
  text-decoration: underline;
  color: var(--primary-hover);
}


/* Estilos Padrão para Formulários e Botões */
.form-container {
  max-width: 450px;
  margin: 40px auto;
  padding: 30px;
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.form-container h2 {
  text-align: center;
  margin-bottom: 25px;
  color: var(--text-color);
}

input, select {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus, select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-color);
  color: white;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--primary-hover);
}

.form-link {
  text-align: center;
  margin-top: 15px;
}

.form-link a {
  color: var(--primary-color);
  text-decoration: none;
}
.form-link a:hover {
  text-decoration: underline;
}
</style>