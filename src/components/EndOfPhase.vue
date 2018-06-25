<template>
    <div>
        <div v-for="(pile, teamId) in score">
            {{ teamName(teamId) }} => {{ pile.length }}
        </div>
        <h4>The Winner of the phase is:</h4>
        <h2>{{ teamName(phaseWinner(teams)) }}</h2>
        <p>
            <button @click="next">Next Phase</button>
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