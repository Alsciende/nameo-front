<template>
    <div id="app">
        <h1>Page {{ page }}</h1>
        <h2>{{ timer }}</h2>
        <p>
            <button @click="startTurn">Start Turn</button>
            <button @click="changePage">Change Page</button>
        </p>
        <p>
            <button @click="success">Success</button>
            <button @click="failure">Failure</button>
        </p>
        <h2>{{ current }}</h2>
        <component v-bind:is="currentComponent"></component>
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import GoodbyeWorld from './components/GoodbyeWorld.vue';
  import { mapGetters } from 'vuex'

  const pages = {
    1: 'hello-world',
    2: 'goodbye-world',
  };

  export default {
    name: 'app',
    components: {
      HelloWorld,
      GoodbyeWorld,
    },
    computed: {
      page() {
        return this.$store.getters.page;
      },
      ...mapGetters('timer', [
        'timer'
      ]),
      ...mapGetters('cards', [
        'current'
      ]),
      currentComponent() {
        return pages[this.page];
      },
    },
    methods: {
      changePage() {
        this.$store.commit('changePage');
      },
      startTurn() {
        this.$store.dispatch('timer/start', 10);
        this.$store.commit('cards/reset');
        this.$store.commit('cards/begin');
      },
      success() {
        this.$store.commit('cards/success');
      },
      failure() {
        this.$store.commit('cards/failure');
      },
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
