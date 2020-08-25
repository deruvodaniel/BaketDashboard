<template>
    
    <div class="team-table container section">
        
        <b-table striped hover :items="items" :fields="fields"></b-table>            
    </div>

        
</template>


<script>
export default {

  name: 'teamTable',
  data (){
    return {
      msg: ' TeamTable',
      fields: [
          {
            key: 'name',
            sortable: true
          },
          {
            key: 'age',
            sortable: true
          },
          {
            key: 'height',
            sortable: true,
          },
          {
            key: 'number',
            sortable: true,
          }
        ],
        items: [
          { isActive: true, name: 'Dickerson', age: 29 , height: 2, number: 23},
          { isActive: false, name: 'Larsen', age: 21, height: 2, number: 32},
          { isActive: false, name:'Geneva' , age: 32, height: 2, number: 34},
          { isActive: true, name: 'Jami', age: 28, height: 2, number: 45},
          { isActive: true, name: 'Jordan', age: 30, height: 2 , number:56},
          { isActive: false, name: 'Lawrence', age: 25, height: 2, number: 76},
          { isActive: false, name: 'Richard', age: 22, height: 2, number: 65},
          { isActive: true, name: 'Roxanne', age: 22, height: 2, number: 3},
          { isActive: true, name: 'Fergie', age: 25, height: 2 , number:7},
          { isActive: false, name: 'Claudio', age: 21, height: 2, number: 9},
          { isActive: false, name: 'Tommy', age: 19, height: 2 , number: 0},
          { isActive: true, name: 'Max', age: 17, height: 2 , number: 99}
        ]
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>