<template>
  <div class="pollChoice">
    <button @click="registerChoice">{{ btnText }}</button>
    <!-- the value of btnText is displayed on the button, onclick registerChoice is called -->
  </div>
</template>

<script>
  export default {
    name: 'pollChoice',
    props: {    // if props are declared in a props object (vs array), specific parameters can be set for each prop
      btnAction: {
        type: String,   // type defines what data type this prop should be 
        required: true  // required: true -- this prop MUST be set when using this component in a template
      },
      btnText: {
        type: String,
        required: true
      }
    },
    methods: {
      registerChoice: function () {    // this is the event handler for the onclick event of the (poll)button
        this.$store.commit(this.btnAction); // the button calls a $store.commit with the value of the btnAction prop: 'increaseHalfFull' or 'increaseHalfEmpty'
        this.$store.commit('increaseTotal');    // no matter which button is clicked, the total click count ($store.state.total) has to be increased too 
      }
    }
  }
</script>

<style scoped>
  /*  this style rule adjusts all button elements,
      but the 'scoped' attribute stops it from bleeding over to other components,
      such as the pollState's button  */
  button {
    box-sizing: border-box;
    width: 100%;
    font-family: monospace;
    font-size: 1.5rem;
    padding: 1vw;
  }
</style>