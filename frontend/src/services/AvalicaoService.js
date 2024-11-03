import axios from "axios";

const url = `${import.meta.env.VITE_URL_API}/avaliacoes`;

function buscarAvaliacoes() {
  return axios
    .get(url)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch(() => {
      return { sucesso: false, mensagem: `Ocorreu um erro!` };
    });
}

function buscarUmaAvaliacao(id) {
  return axios
    .get(`${url}/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch(() => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

function criarAvaliacao(avaliacao) {
  return axios
    .post(url, avaliacao)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch(() => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

export { buscarAvaliacoes, buscarUmaAvaliacao, criarAvaliacao };
