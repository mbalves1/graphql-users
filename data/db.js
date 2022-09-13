let id = 1
function proximoId() {
  return id++
}

const usuarios = [
  {
    id: proximoId(),
    nome: 'João',
    email: 'joao@email.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
  },
  {
    id: proximoId(),
    nome: 'Pedro',
    email: 'pedro@email.com',
    idade: 45,
    perfil_id: 2,
    status: 'INATIVO'
  },
  {
    id: proximoId(),
    nome: 'José',
    email: 'josé@email.com',
    idade: 26,
    perfil_id: 1,
    salario_real: 1555,
    vip: false,
    status: 'BLOQUEADO'
  }
];

const perfis = [
  {
    id: 1,
    nome: 'comun',
  },
  {
    id: 2,
    nome: 'admin',
  }
]

module.exports = {
  usuarios,
  perfis,
  proximoId
} 