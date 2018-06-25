<template>
    <div>
        <h1>Équipes</h1>
        <div v-for="(team, teamId) in teams">
            <h2>{{ teamName(teamId) }}</h2>
            <ul>
                <li v-for="playerId in teamPlayers(teamId)">{{ playerName(playerId) }}</li>
            </ul>
        </div>
        <p>
            <button @click="next">Lancer la partie</button>
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