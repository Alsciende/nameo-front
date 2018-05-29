<template>
  <div id="app">
    <h1>Page {{ page }}</h1>
    <p>
      <button @click="changePage">Change Page</button>
    </p>
    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import GoodbyeWorld from './components/GoodbyeWorld.vue';

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
    currentComponent() {
      return pages[this.page];
    },
  },
  methods: {
    changePage() {
      this.$store.commit('changePage');
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
