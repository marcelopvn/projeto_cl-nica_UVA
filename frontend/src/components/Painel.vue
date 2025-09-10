<template>
  <div style="max-width:900px;margin:20px auto;">
    <h2>Painel de Agendamentos</h2>
    <button @click="logout">Sair</button>
    <Agendar @novo="carregarAgendamentos" />
    <div v-if="agendamentos.length===0">Nenhum agendamento</div>
    <ul>
      <li v-for="a in agendamentos" :key="a._id" style="margin-bottom:8px;">
        <strong>{{ a.pacienteNome }}</strong> —
        {{ formataDataHora(a.datetime) }} —
        {{ a.endereco || 'Endereço não informado' }} —
        Clima: {{ a.clima || 'N/A' }} —
        Chuva prevista: {{ a.chuvaPrevista ? 'Sim' : 'Não' }}
      </li>
    </ul>
  </div>
</template>

<script>
import Agendar from './Agendar.vue';
import api from '../services/api';
export default {
  components: { Agendar },
  data(){ return { agendamentos: [] }; },
  mounted(){ this.carregarAgendamentos(); },
  methods:{
    async carregarAgendamentos(){
      try {
        const res = await api.get('/agendamentos');
        this.agendamentos = res.data;
      } catch (err) {
        alert('Erro ao carregar agendamentos');
      }
    },
    formataDataHora(dt){
      const d = new Date(dt);
      return d.toLocaleString();
    },
    logout(){
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
}
</script>
