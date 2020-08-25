<template>
  <div class="login" :class= "{'d-none': isLogged}">
    <img alt="Ball logo" src="../assets/logo.png">   
    <div class="registro">
      <div class="user">
        <i class="fas fa-user"></i>
        <input v-model="user" id="user" type="text" placeholder="Username">
      </div>
      <div class="password">
        <i class="fas fa-unlock"></i>
        <input v-model="password" id="password" type="password" placeholder="Password">
        
      </div>
      <b-button @click='login()' class="boton" quared variant="info">Enter</b-button>
    </div>

    <div id="nav">
    <p >You not have an user?<a href="#">Sign Up</a></p>
    <p>Forgot your password?<a href="#">Get New Password</a></p>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src





export default {
  
  data (){
    return {
      user: 'admin',
      password: 'admin',
      isLogged: false

    }
  },

  methods:{
    login: function(){
      if(this.user == 'admin' & this.password == 'admin'){
        this.isLogged = true;
        router.push('Dashboard')
      }else {
        alert("Datos Icorrectos") 
      }
    }
  }
  
}


</script>



<style scoped>
p {
  color: darkgrey;
}

div.login img{
  max-width: 600px;
  
}

div.registro {
display: grid;
justify-content: center;
padding: 8px;
}

div.registro i {
  color: #97afff;
  font-size: 1.5rem;
  padding: 8px;
}

div.user{
display: flex;
padding: 8px;
}

div.password {
display: flex;
padding: 8px;
}

.boton {
  padding: 8px;
  margin: 13px
}
</style>


