<template>
    <div>
        <div v-for="(score, index) in finalScore">
            <h2>Phase {{ index + 1 }}</h2>
            <div v-for="(pile, team) in score">
                {{ teamName(team) }} => {{ pile.length }}
            </div>
        </div>
        <h2>And the winner is: {{ teamName(winningTeam(teams)) }}</h2>
        <p>
            <button @click="next">Play Again</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "end-of-game",
    computed: {
      ...mapGetters('players', [
        'teams',
        'teamName',
      ]),
      ...mapGetters('cards', [
        'finalScore',
        'winningTeam',
      ]),
    },
    methods: {
      next() {
        this.$store.dispatch('GameStarts');
      },
    },
  };
</script>

<style scoped>

</style>