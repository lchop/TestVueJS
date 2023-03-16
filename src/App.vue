<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Merci de vous login.</h1>
    <LoginPage/>
    <AdminPanel/>
    <HomePage/>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'
import AdminPanel from './components/AdminPanel.vue'
import HomePage from './components/HomePage.vue'

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
