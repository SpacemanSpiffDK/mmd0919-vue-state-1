<template>
  <div class="pollStats">
    <!-- all vue component templates have EXACTLY ONE root level element -->
    <button @click="showStats = !showStats">
      <span v-if="!showStats">Show result</span>
      <span v-if="showStats">Hide result</span>
    </button>
    <!-- onclick toggleStats is called -->
    <div class="stats" v-show="showStats">
      <!-- this div is visible if 'showStats' evaluates to true -->
      <h2>Poll statistics</h2>
      <p>Half full: {{ hFull }} = {{ percentFull }}%</p>
      <!-- the value of 'hFull' (a computed variable) is displayed here -->
      <p>Half empty: {{ hEmpty }} = {{ percentEmpty }}%</p>
      <!-- the value of 'hEmpty' (a computed variable) is displayed here -->
      <p class="total">Total votes: {{ total }}</p>
      <!-- the value of 'total' (a computed variable) is displayed here -->
      <div id="bar"><div id="ruler" v-bind:style="{ width: percentFull + `%` }"></div></div>
      <!-- use percentFull as a styling value -->
      <div>
        <button @click="resetStats">Reset stats</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PollStats',
    data: function () {  // in ALL vue components, the data object has to be wrapped in a function
      return {
        showStats: false,
        percentWidth: 0
      }
    },
    computed: { // the heart of vue's reactive system, computed variables are recalculated and updated (only) when the dependent variables have changed
      hFull: function () { // hFull needs to be updated with the value of $store.state.halfFull to correctly display the nr. of clicks
        return this.$store.state.halfFull;  // accessing the $store.state's relevant variable
      },
      hEmpty: function () {    // hEmpty needs to be updated with the value of $store.state.halfEmpty
        return this.$store.state.halfEmpty;
      },
      total: function () { // total needs to be updated with the value of $store.state.total
        return this.$store.state.total;
      },
      percentFull: function () {
        let percent = parseInt(this.$store.state.halfFull) / parseInt(this.$store.state.total) * 100; // calculate percentage
        if (isNaN(percent)) { // one way of checking for Not A Number
          percent = 0;        // one way of checking for Not A Number
        }                     // one way of checking for Not A Number
        return Math.round(percent); // return the rounded value of percent
      },
      percentEmpty: function () {
        let percent = parseInt(this.$store.state.halfEmpty) / parseInt(this.$store.state.total) * 100; // calculate percentage
        percent = isNaN(percent) ? 0 : percent; // another way of checking for Not A Number
        return Math.round(percent); // return the rounded value of percent
      }
    },
    methods: {
      resetStats: function () {
        this.$store.state.total = 0;
        this.$store.state.halfFull = 0;
        this.$store.state.halfEmpty = 0;
      }
    }
  }
</script>

<style scoped>
  button {
    font-family: roboto;
    padding: 1vw 2vw;
    margin-bottom: 1vw;
  }

  h2 {
    margin: 0;
    color: white;
  }

  .pollStats {
    background-color: #45aaf2;
    padding: 1vw;
  }

  .stats {
    padding: 1vw;
    text-align: left;
    background-color: #2d98da;
    color: greenyellow;
    font-size: 1rem;
  }

  .total {
    font-weight: bold;
    color: white;
  }

  #bar {
    background-color: #eb3b5a;
  }
  #ruler {
    height: 3vw;
    background-color: #20bf6b;
  }
  button {
    margin: 1vw 0;
  }
</style>