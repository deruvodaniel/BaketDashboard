<template>
    
    <div class="add-player container section">
        <h4>{{msg}}</h4>
        <div>
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Add PLayer"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
            >
            <b-form-group
                label-cols-sm="3"
                label="Name:"
                label-align-sm="right"
                class="newPlayer"
                v-model="newPlayer"
            >
                <b-form-input id="nested-street"></b-form-input>
            </b-form-group>

            <b-form-group
                label-cols-sm="3"
                label="Age:"
                label-align-sm="right"
                label-for="nested-city"
            >
                <b-form-input id="nested-city"></b-form-input>
            </b-form-group>

            <b-form-group
                label-cols-sm="3"
                label="Height:"
                label-align-sm="right"
                label-for="nested-state"
            >
                <b-form-input id="nested-state"></b-form-input>
            </b-form-group>

            <b-form-group
                label-cols-sm="3"
                label="Number:"
                label-align-sm="right"
                label-for="nested-country"
            >
                <b-form-input id="nested-country"></b-form-input>
            </b-form-group>

            
            </b-form-group>

            <b-button v-on:keyup.enter="AddPlayer" block variant="primary">Add!</b-button>
        </b-card>
        </div><!-- Add Player -->
    </div> <!-- team-manager -->
</template>


<script>
export default {
    name: 'AddPlayer',
    data (){
    return {
      msg: 'Add Player',
      newPlayer :""
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>