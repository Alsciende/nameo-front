<template>
    <div id="app">
        <h1>Page {{ route }}</h1>
        <component v-bind:is="route"></component>
    </div>
</template>

<script>
  import BeforeTurn from './components/BeforeTurn.vue';
  import Turn from './components/Turn.vue';
  import AfterTurn from './components/AfterTurn.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'app',
    components: {
      BeforeTurn,
      Turn,
      AfterTurn,
    },
    computed: {
      ...mapGetters('router', [
        'route',
      ]),
    },
    mounted() {
      this.$store.commit('cards/reset');
      this.$store.commit('cards/begin');
      this.$store.commit('router/change', 'before-turn');
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
