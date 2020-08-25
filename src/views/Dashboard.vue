<template>
 <div>
     <h2>{{msg}}</h2>

     <TeamStatistics> </TeamStatistics>
     
 </div>
    
</template>


<script>
export default {
   name: 'dashboard',
  data (){
    return {
      msg: 'Misk Dashboard'
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>