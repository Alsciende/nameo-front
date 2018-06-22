<template>
    <div>
        <p>
            <label for="nbPlayersInput">Number of Players</label>
            <input id="nbPlayersInput" type="number" v-model="nbPlayers">
        </p>
        <p>
            <label for="nbTeamsInput">Number of Teams</label>
            <input id="nbTeamsInput" type="number" v-model="nbTeams">
        </p>
        <p>
            <label>Difficulty</label>
            <input type="radio" id="difficulty0" value="0" v-model="difficulty">
            <label for="difficulty0">Very Easy</label>
            <br>
            <input type="radio" id="difficulty1" value="1" v-model="difficulty">
            <label for="difficulty1">Easy</label>
            <br>
            <input type="radio" id="difficulty2" value="2" v-model="difficulty">
            <label for="difficulty2">Medium</label>
            <br>
            <input type="radio" id="difficulty3" value="3" v-model="difficulty">
            <label for="difficulty3">Hard</label>
            <br>
            <input type="radio" id="difficulty4" value="4" v-model="difficulty">
            <label for="difficulty4">Very Hard</label>
            <br>
        </p>
        <p>
            <button @click="next">Player Names</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "SetParameters",
    data() {
      return {
        nbPlayers: 4,
        nbTeams: 2,
        difficulty: 2,
        nbCards: 30,
      };
    },
    methods: {
      next() {
        this.$store.dispatch('ParametersSet', this.$data);
      },
    },
  };
</script>

<style scoped>
</style>