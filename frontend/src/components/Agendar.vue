<template>
  <div style="border:1px solid #ddd;padding:12px;margin-bottom:12px;">
    <h3>Agendar Consulta</h3>
    <input v-model="pacienteNome" placeholder="Nome do paciente" />
    <input v-model="date" type="date" />
    <input v-model="time" type="time" />
    <input v-model="cep" placeholder="CEP (opcional)" />
    <button @click="agendar">Agendar</button>
  </div>
</template>

<script>
import api from '../services/api';
export default {
  data(){ return { pacienteNome:'', date:'', time:'', cep:'' } },
  methods: {
    async agendar() {
      try {
        const res = await api.post('/agendamentos', {
          pacienteNome: this.pacienteNome,
          date: this.date,
          time: this.time,
          cep: this.cep
        });
        alert('Agendamento criado!');
        this.$emit('novo'); 
        this.pacienteNome = this.date = this.time = this.cep = '';
      } catch (err) {
        alert(err.response?.data?.error || 'Erro ao agendar');
      }
    }
  }
}
</script>
