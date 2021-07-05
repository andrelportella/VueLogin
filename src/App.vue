<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/content">Content</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted: function() {
    this.verificaLogin();
  },

  methods: {
    verificaLogin() {
     
      this.$store.dispatch("verificaToken", window.localStorage.token);
    },
  },
};
</script>

<style></style>
