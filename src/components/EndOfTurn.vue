<template>
    <section class="section">
        <div class="container has-text-centered">
            <h2 class="subtitle">C'est la fin du tour de</h2>
            <h1 class="title">{{ currentPlayerName }}</h1>
            <table class="table is-striped is-fullwidth">
                <thead><tr><th>Noms</th><th>Nombre</th></tr></thead>
                <tbody>
                <tr><td>Réussis</td><td>{{ won.length }}</td></tr>
                <tr><td>Échoués</td><td>{{ lost.length }}</td></tr>
                </tbody>
            </table>
            <p>
                <button @click="next" class="button is-primary">Suite</button>
            </p>
        </div>
        <team-background :use-timer="false"></team-background>
    </section>
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