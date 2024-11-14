import axios from "axios";

const url = import.meta.env.VITE_URL_API;

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

function autenticar(usuario) {
  return axios
    .post(`${url}/login`, {
      email: usuario.email,
      password: usuario.senha,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, mensagem: error.response.data };
      } else {
        return { sucesso: false, mensagem: error.message };
      }
    });
}

function criarUsuario(usuario) {
  return axios
    .post(`${url}/register`, {
      nome: usuario.nome,
      email: usuario.email,
      password: usuario.senha,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, mensagem: error.response.data };
      } else {
        return { sucesso: false, mensagem: error.message };
      }
    });
}

function alterar(usuario) {
  return axios
    .put(`${url}/users/${usuario.id}`, {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      password: usuario.senha,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, mensagem: error.response.data };
      } else {
        return { sucesso: false, mensagem: error.message };
      }
    });
}

export { buscarUsuario, autenticar, criarUsuario, alterar };
