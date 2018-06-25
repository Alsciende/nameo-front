<template>
    <div>
        <h1>Fin de la phase {{ current }}</h1>
        <table>
        <tr v-for="(pile, teamId) in score">
            <td>{{ teamName(teamId) }}</td><td>{{ pile.length }}</td>
        </tr>
        </table>
        <h4>La victoire revient à</h4>
        <h2>{{ teamName(phaseWinner(teams)) }} !</h2>
        <p>
            <button @click="next">Suite</button>
        </p>
    </div>
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