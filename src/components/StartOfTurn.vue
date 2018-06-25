<template>
    <div>
        <h2>C'est le tour de</h2>
        <h1>{{ currentPlayerName }}</h1>
        <p>
            <button @click="startTurn">Lancer le timer</button>
        </p>
        <team-background :use-timer="false"></team-background>
    </div>
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