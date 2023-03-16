<template>
  <div class="hello">
    <!-- <h1>{{ title }}</h1> -->
    <!-- <form  action="#" method="post">Login</form>
    <textarea name="Test" id="test" cols="50" rows="2.5"></textarea>
    <button onsubmit="console.log(test);" style="position: fixed;width: 60px; height: 25px;left: 663px;top: 353px;">Login</button>
   -->
    <!-- <form method="get" onsubmit="Verifie(this)">
      <label for="pseudo">Pseudo : </label> <input type="text" id="pseudo" name="pseudo" /><br />
      <label for="pass">Mot de passe : </label> <input type="password" id="pass" name="pass" /><br />
      <input type="submit" value="Connexion" />
    </form> -->


    <form>
			<input type="text" id="username" placeholder="Choose Username">
			<input type="password" id="password" placeholer="Choose Password">
			<button type="button" onclick="getInfo()">Click Me</button>
		</form>
    
  
    <!-- <button @click="handleClick">Click me!</button> -->

  
  
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
		username: "sam",
		password: "codify"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
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
