<template>
    <div id="app">
        <h1>Page {{ route }}</h1>
        <component v-bind:is="route"></component>
    </div>
</template>

<script>
  import StartOfPhase from './components/StartOfPhase';
  import EndOfPhase from './components/EndOfPhase';
  import StartOfTurn from './components/StartOfTurn';
  import Turn from './components/Turn';
  import EndOfTurn from './components/EndOfTurn';
  import { mapGetters } from 'vuex';

  export default {
    name: 'app',
    components: {
      StartOfPhase,
      StartOfTurn,
      Turn,
      EndOfTurn,
      EndOfPhase,
    },
    computed: {
      ...mapGetters('router', [
        'route',
      ]),
    },
    mounted() {
      this.$store.commit('router/change', 'start-of-phase');
    },
  };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
