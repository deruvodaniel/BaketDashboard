<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/Dashboard">Dashboard</router-link>|
      <router-link to="/Team">Team</router-link>|
      <router-link to="/NewPractice">New Practice</router-link>
      
    </div>
    <router-view/>
  </div>
</template>

<script>

// @ is an alias to /src


export default {
  
}
</script>



<style>

#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-image: url(./assets/Background.jpg) ;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  min-height: 80rem;

}



#app h1, h2, h3, h4, {
  color: #ffffff;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #97afff;
  padding: 8px;
  text-decoration: none;
  transition: ease .3s;
}
#nav a:hover {
  color: #21af6d;
}


#nav a.router-link-exact-active {
  color: #21af6d;
}

.container {
  width: 75%;
  max-width: 120rem;
  margin: 0 auto;
}

.section {
  margin-bottom: 4rem;
}
</style>
