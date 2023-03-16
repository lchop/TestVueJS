<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <LoginPage/>
  <AdminPanel/>
</template>

<script>
import LoginPage from './components/Login.vue'
// import AdminPanel from './components/AdminPanel.vue'

export default {
  name: 'App',
  components: {
    LoginPage,
    AdminPanel,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
</style>
