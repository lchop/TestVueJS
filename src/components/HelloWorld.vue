<template>
  <div class="hello">
    <form>
      <input type="text" id="username" placeholder="Choose Username">
      <input type="password" id="password" placeholer="Choose Password">
      <button type="button" @click="getInfo">Click Me</button>
    </form>  
  </div>
</template>
  
<script>
export default {
  methods: {
    getInfo() {
      var username = document.getElementById('username').value
      var password = document.getElementById('password').value

      for(var i = 0; i < objPeople.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if(username == objPeople[i].username && password == objPeople[i].password) {
          console.log(username + " is logged in!!!")
          // stop the function if this is found to be true
          return
        }
      }
      console.log("incorrect username or password")
    }
  },
  name: 'HelloWorld',
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
