<template>
    <div id="app">
        <h4>Page {{ route }}</h4>
        <component v-bind:is="route"></component>
    </div>
</template>

<script>
  import SetParameters from './components/SetParameters';
  import SetPlayerNames from './components/SetPlayerNames';
  import SetPlayerTeams from './components/SetPlayerTeams';
  import StartOfPhase from './components/StartOfPhase';
  import StartOfTurn from './components/StartOfTurn';
  import Turn from './components/Turn';
  import EndOfTurn from './components/EndOfTurn';
  import EndOfPhase from './components/EndOfPhase';
  import EndOfGame from './components/EndOfGame';
  import ResumeGame from './components/ResumeGame';
  import { mapGetters } from 'vuex';

  export default {
    name: 'app',
    components: {
      SetParameters,
      SetPlayerNames,
      SetPlayerTeams,
      StartOfPhase,
      StartOfTurn,
      Turn,
      EndOfTurn,
      EndOfPhase,
      EndOfGame,
      ResumeGame,
    },
    computed: {
      ...mapGetters('router', [
        'route',
      ]),
    },
    mounted() {
      this.$store.dispatch('AppMounted');
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
