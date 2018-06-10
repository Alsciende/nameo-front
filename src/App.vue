<template>
    <div id="app">
        <h1>Page {{ route }}</h1>
        <component v-bind:is="route"></component>
    </div>
</template>

<script>
  import StartOfPhase from './components/StartOfPhase';
  import StartOfTurn from './components/StartOfTurn';
  import Turn from './components/Turn';
  import EndOfTurn from './components/EndOfTurn';
  import EndOfPhase from './components/EndOfPhase';
  import EndOfGame from './components/EndOfGame';
  import { mapGetters } from 'vuex';

  export default {
    name: 'app',
    components: {
      StartOfPhase,
      StartOfTurn,
      Turn,
      EndOfTurn,
      EndOfPhase,
      EndOfGame,
    },
    computed: {
      ...mapGetters('router', [
        'route',
      ]),
    },
    mounted() {
      this.$store.dispatch('GameStarts');
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
