<template>
  <div id="app">
    <h1>The glass is...</h1>
    <section name="poll" class="poll">
      <PollChoice btnText="Half full" btnAction="increaseHalfFull" />
      <!-- btnText and btnAction are (required) props for <PollChoice> -->
      <PollChoice btnText="Half empty" btnAction="increaseHalfEmpty" />
    </section>
    <section name="stats" class="stats">
      <PollStats />
      <!-- all registered components need to be used in the template! -->
    </section>
  </div>
</template>

<script>
  import PollChoice from './components/PollChoice.vue'  // component needs to be imported
  import PollStats from './components/PollStats.vue'

  export default {
    name: 'app',
    components: {
      PollChoice, // component needs to be registered
      PollStats
    }
  }
</script>

<style>
  body {
    background-color: white;
    padding: 2vw;
    margin: 0;
    font-size: 1vw;
    text-align: center;
  }
  #app {
    background-color: #2bcbba;
    font-family: roboto;
    max-width: 640px;
    margin: 0 auto;
    box-shadow: .5vw .5vw 1vw 0 #ccc;
  }
  h1 {
    font-size: 3rem;
    padding: 3vw;
    margin: 0;
  }
  .poll {
    display: flex;
    justify-content: space-around;
  }
  .pollChoice {
    width: 100%;
    padding: 1vw;
  }
</style>
