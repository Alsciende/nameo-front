<template>
    <div class="hello">
        Card Playing Screen
        <h2>{{ timer }}</h2>
        <p>
            <button @click="startTurn">Start Turn</button>
        </p>
        <p>
            <button @click="success">Success</button>
            <button @click="failure">Failure</button>
        </p>
        <h2>{{ current }}</h2>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'HelloWorld',
    computed: {
      ...mapGetters('timer', [
        'timer',
      ]),
      ...mapGetters('cards', [
        'current',
      ]),
    },
    methods: {
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
    watch: {
      timer() {
        if (this.timer === 0) {
          console.log('stop');
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
