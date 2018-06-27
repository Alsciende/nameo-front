<template>
    <div>
        <h2>C'est le tour de</h2>
        <h1>{{ currentPlayerName }}</h1>
        <p>Nom à faire deviner</p>
        <h2>{{ getCurrentCardName }}</h2>
        <p>Timer</p>
        <h2>{{ timer }}</h2>
        <p>
            <button @click="success">Réussi</button>
            <button @click="failure">Échoué</button>
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