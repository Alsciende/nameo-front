<template>
    <div>
        <div v-for="(team, teamId) in teams">
            <h2>{{ teamName(teamId) }}</h2>
            <p v-for="playerId in teamPlayers(teamId)">{{ playerName(playerId) }}</p>
        </div>
        <p>
            <button @click="next">Accept</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "SetPlayerTeams",
    computed: {
      ...mapGetters('players', [
        'playerTeams',
        'playerName',
        'teamName',
        'teamPlayers',
        'teams',
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