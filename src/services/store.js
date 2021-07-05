import Vue from "vue";
import Vuex from "vuex";
import { api } from "./api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: "",
    pass: "",
    token: "",
  },
  mutations: {
    DADOS_ACESSO(state, request) {
      state.user = request.user;
      state.pass = request.pass;
      state.token = request.token;
    },
  },

  actions: {
    async logaUsuario(context, payload) {
      return api
        .login({ user: payload.usuario, pass: payload.senha })
        .then((response) => {
          if (response.status === 200) {
            context.commit("DADOS_ACESSO", response.data[0]);
            window.localStorage.token = `${response.data[0].token}`;
          }
        });
    },

  
  
    async  verificaToken(context, payload_token) {
      return api.verificaLogin(payload_token).then((response) => {
        if (response.status === 200) {
          context.commit("DADOS_ACESSO", response.data[0]);
          //window.localStorage.token = `${response.data[0].token}`;
        


        }
      });
    },
  },

  getters: {},
});

export default store;
