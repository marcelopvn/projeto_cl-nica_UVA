<template>
  <div style="max-width:420px;margin:40px auto;">
    <h2>Cadastro</h2>
    <input v-model="nome" placeholder="Nome" />
    <input v-model="email" placeholder="Email" />
    <input v-model="senha" placeholder="Senha" type="password" />
    <select v-model="tipo">
      <option value="paciente">Paciente</option>
      <option value="secretario">Secretário</option>
    </select>
    <button @click="cadastrar">Cadastrar</button>
    <div v-if="msg" style="margin-top:8px;color:green">{{ msg }}</div>
  </div>
</template>

<script>
import api from '../services/api';
export default {
  data() {
    return { nome: '', email: '', senha: '', tipo: 'paciente', msg: '' };
  },
  methods: {
    async cadastrar() {
      try {
        const res = await api.post('/auth/register', {
          nome: this.nome, email: this.email, senha: this.senha, tipo: this.tipo
        });
        
        if (res.data.token) localStorage.setItem('token', res.data.token);
        this.msg = 'Cadastro OK! Redirecionando para painel...';
        setTimeout(() => this.$router.push('/painel'), 800);
      } catch (err) {
        alert(err.response?.data?.error || 'Erro ao cadastrar');
      }
    }
  }
}
</script>
