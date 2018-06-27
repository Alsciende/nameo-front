<template>
    <div>
        <h2>C'est la fin du tour de</h2>
        <h1>{{ currentPlayerName }}</h1>
        <p>Réussis: {{ won.length }} noms</p>
        <p>Échoués: {{ lost.length }} noms</p>
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