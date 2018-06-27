<template>
    <div>
        <h1>Fin de la partie</h1>
        <!--
        <div v-for="(score, index) in finalScore">
            <h4>Phase {{ index + 1 }}</h4>
            <div v-for="(pile, teamId) in score">
                {{ teamName(teamId) }} => {{ pile.length }}
            </div>
        </div>
        -->
        <p>La victoire finale revient à</p>
        <h2>{{ teamName(gameWinner(teams)) }} !!</h2>
        <p>
            <button @click="next">Nouvelle partie</button>
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
        'gameWinner',
      ]),
    },
    methods: {
      next() {
        this.$store.dispatch('GameLaunched');
      },
    },
  };
</script>

<style scoped>

</style>