const { perfis, proximoId } = require('../../data/db');

function indexPefil(filtro) {
  if(!filtro) return -1
  const { id } = filtro
  if(id) {
    return perfis.findIndex(u => u.id === id);
  }
  return -1;
}

module.exports = {
  //  {nome, email, idade}
  novoPerfil (_, { dados }) {
    const nomeExistente = perfis
      .some(u => u.nome === dados.nome)

    if (nomeExistente) {
      throw new Error('Perfil cadastrado!')
    }
      
    const novo = {
      id: proximoId(),
      ...dados,
    }

    perfis.push(novo);
    return novo;
  },
  excluirPerfil(_, { filtro }) {
    const i = indexPefil(filtro)
    if (i < 0) return null
    const excluidos = perfis.splice(i, 1)
    return excluidos ? excluidos[0] : null;
  },
  alterarPerfil(_, { filtro, dados }) {
    const i = indexPefil(filtro)
    if (i < 0) return null
    const perfil = {
      ...perfis[i],
      ...dados
    };
    perfis.splice(i, 1, perfil);
    return perfil;
  }
}