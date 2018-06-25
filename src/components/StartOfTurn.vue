<template>
    <div>
        <h2>This is the turn of {{ currentPlayerName }}</h2>
        <p>
            <button @click="startTurn">Start Turn</button>
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