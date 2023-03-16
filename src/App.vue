<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Merci de vous login.</h1>
  <LoginPage/>
  <AdminPanel/>
  <HomePage/>
</template>

<script>
import LoginPage from './components/Login.vue'
import AdminPanel from './components/AdminPanel.vue'
import HomePage from './components/Home.vue'

export default {
  name: 'App',
  components: {
    LoginPage,
    AdminPanel,
    HomePage,
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
