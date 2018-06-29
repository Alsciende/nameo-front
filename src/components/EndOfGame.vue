<template>
    <section class="section">
        <div class="container has-text-centered">
            <h1 class="title">Fin de la partie</h1>
            <!--
            <div v-for="(score, index) in finalScore">
                <h4>Phase {{ index + 1 }}</h4>
                <div v-for="(pile, teamId) in score">
                    {{ teamName(teamId) }} => {{ pile.length }}
                </div>
            </div>
            -->
            <p>La victoire finale revient à</p>
            <h2 class="subtitle">{{ teamName(gameWinner(teams)) }} !!</h2>
            <p>
                <button @click="next" class="button is-primary">Nouvelle partie</button>
            </p>
        </div>
    </section>
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