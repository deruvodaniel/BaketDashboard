 <template>
    <div class="new-practice container section">
    <div>
  <b-card bg-variant="light">
    <img alt="Ball logo" src="../assets/logo.png"> 
    <b-form-group
      label-cols-lg="3"
      label="New Shoot"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
    
      <b-form-group
        label-cols-sm="3"
        label="Player:"
        label-align-sm="right"
        label-for="nested-street"
      >
        <b-form-select
      v-model="selected"
      :options="options"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Distance (mts.): "
        label-align-sm="right"
        min="0"
        max="10"
        wrap
      >
      <b-form-spinbutton id="sb-inline" v-model="value" inline min="0"
        max="10"
        wrap></b-form-spinbutton>
      </b-form-group>

       <b-form-group
        label-cols-sm="3"
        label="Score:"
        label-align-sm="right"
        
      >
        <b-form-radio-group
          class="pt-2"
          :options="['IN', 'OUT']"
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Position:"
        label-align-sm="right" class="mb-0"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['1', '2', '3', '4', '5']"
        ></b-form-radio-group>
      </b-form-group>
    </b-form-group>
    <b-button block variant="primary">Add!</b-button>
  </b-card>
</div>
    </div><!-- new-practice -->    
</template>


<script>
export default {
     name: 'practice',
    data (){
    return {
      msg: 'Practice',
      selected: 'A',
      value: 0,
        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' }]
        
    }
  }
  
}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-body{
background-color: rgb(155, 155, 155);
}

div.new-practice img{
  max-width: 300px;
}

</style>