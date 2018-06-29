<template>
    <section class="section">
        <div class="container has-text-centered">
            <h2 class="subtitle">C'est le tour de</h2>
            <h1 class="title">{{ currentPlayerName }}</h1>
            <p>Nom à faire deviner</p>
            <h2 class="subtitle">{{ getCurrentCardName }}</h2>
            <p>Timer</p>
            <h2 class="subtitle">{{ timer }}</h2>
            <div class="buttons is-centered">
                <button @click="success" class="button is-success">Réussi</button>
                <button @click="failure" class="button is-danger">Échoué</button>
            </div>
        </div>
        <team-background :use-timer="true"></team-background>
    </section>
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