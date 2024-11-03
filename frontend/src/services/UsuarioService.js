import axios from "axios";

const url = `${import.meta.env.VITE_URL_API}/usuarios`;

function buscarUsuario(id) {
  return axios
    .get(`${url}/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch(() => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

function criarUsuario(usuario) {
  return axios
    .post(url, usuario)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch(() => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

function atualizarUsuario(usuario) {
  return axios
    .put(`${url}/${usuario.id}`, {
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch(() => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

export { buscarUsuario, criarUsuario, atualizarUsuario };
