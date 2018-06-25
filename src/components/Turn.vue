<template>
    <div>
        <h2>This is the turn of {{ currentPlayerName }}</h2>
        <h4>Timer:</h4>
        <h2>{{ timer }}</h2>
        <h4>Your card:</h4>
        <h2>{{ getCurrentCardName }}</h2>
        <p>
            <button @click="success">Success</button>
            <button @click="failure">Failure</button>
        </p>
        <team-background :use-timer="true"></team-background>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import TeamBackground from './TeamBackground';

  export default {
    name: "Turn",
    components: {
      TeamBackground,
    },
    computed: {
      ...mapGetters('timer', [
        'timer',
      ]),
      ...mapGetters('cards', [
        'getCurrentCardName',
      ]),
      ...mapGetters('players', [
        'currentPlayerName',
      ]),
    },
    methods: {
      success() {
        this.$store.dispatch('CardIsWon');
      },
      failure() {
        this.$store.dispatch('CardIsLost');
      },
    },
  };
</script>

<style scoped>
</style>