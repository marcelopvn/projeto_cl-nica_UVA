<template>
  <div style="max-width:420px;margin:40px auto;">
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="senha" placeholder="Senha" type="password" />
    <button @click="fazerLogin">Entrar</button>
    <div style="margin-top:10px;">
      <router-link to="/register">Criar conta</router-link>
    </div>
  </div>
</template>

<script>
import api from '../services/api';
export default {
  data() { return { email:'', senha:'' }; },
  methods: {
    async fazerLogin() {
      try {
        const res = await api.post('/auth/login', { email: this.email, senha: this.senha });
        localStorage.setItem('token', res.data.token);
        alert('Login OK');
        this.$router.push('/painel');
      } catch (err) {
        alert(err.response?.data?.error || 'Erro no login');
      }
    }
  }
}
</script>
