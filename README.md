Sistema de Atendimento Inteligente para Clínicas
Este projeto é uma aplicação web completa para agendamento de consultas. Possui um backend em Node.js para a API e um frontend em Vue.js para a interface do usuário.

Funcionalidades
Cadastro e Login de usuários (pacientes e secretários) com autenticação JWT.

Criação de agendamentos com verificação de horário.

Consulta automática de endereço por CEP (API ViaCEP).

Painel para visualização de todas as consultas.

Tecnologias
Backend: Node.js, Express, MongoDB, Mongoose, JWT.

Frontend: Vue.js 3, Vue Router, Axios.

Como Executar Localmente
Pré-requisitos: Node.js, npm, Vue CLI e MongoDB.

1. Backend
Abra um terminal na pasta backend/:

# Instalar dependências
npm install

# Crie o arquivo .env e adicione suas chaves:
# MONGODB_URI=mongodb://127.0.0.1:27017/clinica
# JWT_SECRET=sua_chave_secreta

# Iniciar o servidor
npm run dev

O backend rodará em http://localhost:3000.

2. Frontend
Abra um segundo terminal na pasta frontend/:

# Instalar dependências
npm install

# Iniciar a aplicação
npm run serve

A aplicação estará acessível em http://localhost:8080.

Links do Deploy
A aplicação foi publicada e está totalmente funcional nos seguintes links:

Frontend (Vercel): https://clinica-inteligente.vercel.app/

Interface principal onde o usuário interage com o sistema.

Backend/API (Render): https://api-clinica-inteligente.onrender.com/

Servidor que gerencia os dados e a lógica de negócio.