<template>
  <div class="team-statistics container section">
      
      <b-card-group deck>
        <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
           <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
</template>

<script>
export default {
 name: 'TeamStatistics',
  data (){
    return {
      msg: 'Team Statistics'
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>