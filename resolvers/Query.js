const { usuarios, perfis } = require('../data/db');

module.exports = {
  ola () {
    return 'Bom dia'
  },
  horaAtual () {
    return `${new Date}`
  },
  usuarioLogado () {
    return {
      id: 1,
      nome: 'Murilo',
      email: 'murilo@email.com',
      idade: 32,
      salario_real: 1234,
      vip: true
    }
  },
  produtoEmDestaque () {
    return {
      nome: 'Computador',
      preco: 15,
      desconto: 0,
    }
  },
  numerosMegaSena () {
    const crescente = (a,b) => a - b
    return Array(6).fill(0)
      .map(n => parseInt(Math.random() * 60 +1))
      .sort(crescente)
  },
  usuarios () {
    return usuarios
  },
  usuario (_, { id }) {
    const sel = usuarios.filter(u => u.id == id);
    return sel ? sel[0] : null;
  },
  perfis () {
    return perfis
  },
  perfil (_, { nome }) {
    const per = perfis.filter(u => u.id === id);
    return per ? per[0] : null;
  }
}