const { usuarios, proximoId } = require('../../data/db');

function indexUsuario(filtro) {
  if(!filtro) return -1
  const { id, email } = filtro
  if(id) {
    return usuarios.findIndex(u => u.id === id);
  } else if (email) {
    return usuarios.findIndex(u => u.email === email);
  }
  return -1;
}

module.exports = {
  //  {nome, email, idade}
  novoUsuario (_, { dados }) {
    const emailsExistente = usuarios
      .some(u => u.email === dados.email)

    if (emailsExistente) {
      throw new Error('Email cadastrado!')
    }
      
    const novo = {
      id: proximoId(),
      ...dados,
      perfil_id: 1,
      status: 'ATIVO'
    }

    usuarios.push(novo);
    return novo;
  },
  excluirUsuario(_, { filtro }) {
    const i = indexUsuario(filtro)
    if (i < 0) return null
    const excluidos = usuarios.splice(i, 1)
    return excluidos ? excluidos[0] : null;
  },
  alterarUsuario(_, { filtro, dados }) {
    const i = indexUsuario(filtro)
    if (i < 0) return null
    const usuario = {
      ...usuarios[i],
      ...dados
    };
    usuarios.splice(i, 1, usuario);
    return usuario;
  }
}