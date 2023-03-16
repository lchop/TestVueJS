<template>
  <div class="Login">
    <form>
      <h3>Bonjour merci de vous login.</h3><br>
      <input style="border-color: transparent; height: 20px;width: 150px;position: relative;left: 20px;" type="text" id="username" placeholder="       Id"><br>
      <input style="border-color: transparent; height: 20px;width: 250px;position: relative;left: 60px;" type="password" id="password" placeholder="      Mot de passe">
      <button style="background-color: transparent;border-radius: 20px;border-style: solid;height: 35px;width: 80px;position: relative;left: 70px;" type="button" @click="getInfo">Login</button>
    </form>  
  </div>
</template>
  
<script>
export default {
  methods: {
    getInfo() {
      var username = document.getElementById('username').value
      var password = document.getElementById('password').value
      if (username !== "" && password !== "") {
        
        for(var i = 0; i < objPeople.length; i++) {
          // check is user input matches username and password of a current index of the objPeople array
          if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log("Tu t'es bien login en tant que " + username)
            window.location.href = '/components/AdminPanel';
            // window.location.reload()
            // stop the function if this is found to be true
            return
          }
        }
        console.log("Le mot de passe ou l'id est incorrect.")
      } else {
        console.log("Un id est un mot de passe doit être renseigné.");
      }
      console.log(username + " " + password);      
    },
    getUsername() {
      return document.getElementById('username').value;
    }  
  },
  name: 'LoginPage',
  props: {
    title: String,
  }
}

var objPeople = [
    { // Object @ 0 index
        username: "test",
        password: "test"
    },
    { // Object @ 1 index
        username: "Admin",
        password: "admin"
    }

]
</script>





















<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #60ffb8;
}
</style>
