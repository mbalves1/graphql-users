const { perfis } = require('../data/db');

module.exports = {
  salario (usuario) {
    return usuario.salario_real
  },
  perfil (usuario) {
    const per = perfis.filter(p => p.id === usuario.perfil_id);
    return per ? per[0] : null;
  }
}