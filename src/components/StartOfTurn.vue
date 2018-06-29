<template>
    <section class="section">
        <div class="container has-text-centered">
            <h2 class="subtitle">C'est le tour de</h2>
            <h1 class="title">{{ currentPlayerName }}</h1>
            <p>
                <button @click="startTurn" class="button is-primary">Lancer le timer</button>
            </p>
        </div>
        <team-background :use-timer="false"></team-background>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import TeamBackground from './TeamBackground';

  export default {
    name: "StartOfTurn",
    components: {
      TeamBackground,
    },
    computed: {
      ...mapGetters('players', [
        'currentPlayerName',
      ]),
    },
    methods: {
      startTurn() {
        this.$store.dispatch('TurnStarts');
      },
    },
  };
</script>

<style scoped>

</style>