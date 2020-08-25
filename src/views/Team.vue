<template>
    <div>
        <h2>{{msg}}</h2>

        <TeamTable> </TeamTable>

        <AddPlayer> </AddPlayer>

        

    </div>
</template>

<script>
export default {
    name: 'team',
  data (){
    return {
      msg: 'Misk Basketball Team'
    }
  }
  
}
</script>

<style scoped>



</style>