<template>
  <div>
    <h1>Conteudo Liberado</h1>
    <h2>Bem vindo {{ $store.state.user }}</h2>
    <button type="submit" class="btn" @click.prevent="logoff">Logoff</button>
  </div>
</template>

<script>
export default {
  name: "Content",
  methods: {
    logoff() {
      window.localStorage.clear();
      this.$store.state.user = "";
      this.$store.state.pass = "";
      this.$store.state.token = "";
      this.$router.push({ name: "home" });
    },
  },
};
</script>
