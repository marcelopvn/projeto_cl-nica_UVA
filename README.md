Sistema de Atendimento Inteligente para Clínicas

Um projeto de aplicação web full-stack para gerenciamento de agendamentos em clínicas médicas, com autenticação de usuários e integração com APIs externas para consulta de CEP e clima.


-------------------------------------------------------------------

Tecnologias Utilizadas

Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt.

Frontend: Vue.js 3, Vue Router, Axios, Pinia.


--------------------------------------------------------------------

Como Rodar o Projeto Localmente:

Pré-requisitos
Node.js e npm

Vue CLI (npm install -g @vue/cli)

MongoDB


--------------------------------------------------------------------

1. Backend
Abra um terminal na pasta backend/:

# Instalar dependências
npm install

# Criar e configurar o arquivo .env com suas chaves
# (MONGODB_URI, JWT_SECRET, OPENWEATHER_KEY)

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