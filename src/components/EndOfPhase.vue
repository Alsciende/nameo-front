<template>
    <section class="section">
        <div class="container has-text-centered">
            <h1 class="title">Fin de la phase {{ current }}</h1>
            <table class="table is-striped is-fullwidth">
                <thead>
                <tr><th>Équipe</th><th>Score</th></tr>
                </thead>
                <tbody>
                <tr v-for="(pile, teamId) in score">
                    <td>{{ teamName(teamId) }}</td>
                    <td>{{ pile.length }}</td>
                </tr>
                </tbody>
            </table>
            <p>La victoire revient à</p>
            <h2 class="subtitle">{{ teamName(phaseWinner(teams)) }} !</h2>
            <p>
                <button @click="next" class="button is-primary">Suite</button>
            </p>
        </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "EndOfPhase",
    computed: {
      ...mapGetters('players', [
        'teams',
        'teamName',
      ]),
      ...mapGetters('cards', [
        'score',
        'phaseWinner',
      ]),
      ...mapGetters('phases', [
        'current',
      ]),
    },
    methods: {
      next() {
        this.$store.dispatch('PhaseEnds');
      },
    },
  };
</script>

<style scoped>

</style>