<template>
  <div class="container">
    <form action="" class="form-login">
      <input type="text" placeholder="nome" v-model="login.usuario" />
      <input type="text" placeholder="senha" v-model="login.senha" />
      <button type="submit" class="btn" @click.prevent="logar">Login</button>
  

      {{ $store.state.user }} - {{ $store.state.token }}
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      login: {
        usuario: "",
        senha: "",
      },
    };
  },

  methods: {
    logar() {
      this.$store.dispatch("logaUsuario", this.login).then((response) => {
        this.$router.push({ name: "content" });
      });
    },
    
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 50%;
  padding: 30px;
  text-align: center;
}

.form-login {
  width: 100%;
  display: block;
  margin: 0 auto;
}

input {
  padding: 25px;

  width: 100%;

  margin: 10px auto;
}

.btn {
  text-align: center;
  margin: 5px auto;
  padding: 25px 50px;
  background-color: rgb(0, 97, 40);
  border: none;
  color: white;
  font-weight: bold;
}
</style>
