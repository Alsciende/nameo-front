<template>
    <div>
        <h2>C'est la fin du tour de</h2>
        <h1>{{ currentPlayerName }}</h1>
        <h3>Réussis: {{ won.length }} noms</h3>
        <h3>Échoués: {{ lost.length }} noms</h3>
        <p>
            <button @click="next">Suite</button>
        </p>
        <team-background :use-timer="false"></team-background>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import TeamBackground from './TeamBackground';

  export default {
    name: "EndOfTurn",
    components: {
      TeamBackground,
    },
    computed: {
      ...mapGetters('players', [
        'currentPlayerName',
      ]),
      ...mapGetters('cards', [
        'won',
        'lost',
      ]),
    },
    methods: {
      next() {
        this.$store.dispatch('TurnEnds');
      },
    },
  };
</script>

<style scoped>

</style>