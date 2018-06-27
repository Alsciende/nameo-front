<template>
    <div>
        <h1>Paramétrage</h1>
        <p>
            <label for="nbPlayersInput">Nombre de joueurs</label><br/>
            <input id="nbPlayersInput" type="number" v-model="nbPlayers">
        </p>
        <p>
            <label for="nbTeamsInput">Nombre d'équipes</label><br/>
            <input id="nbTeamsInput" type="number" v-model="nbTeams">
        </p>
        <p>
            <label>Difficulté</label><br/>
            <input type="radio" id="difficulty0" value="0" v-model="difficulty">
            <label for="difficulty0">Très facile</label>
            <br>
            <input type="radio" id="difficulty1" value="1" v-model="difficulty">
            <label for="difficulty1">Facile</label>
            <br>
            <input type="radio" id="difficulty2" value="2" v-model="difficulty">
            <label for="difficulty2">Moyen</label>
            <br>
            <input type="radio" id="difficulty3" value="3" v-model="difficulty">
            <label for="difficulty3">Difficile</label>
            <br>
            <input type="radio" id="difficulty4" value="4" v-model="difficulty">
            <label for="difficulty4">Très difficile</label>
            <br>
        </p>
        <p>
            <button @click="next">Noms des joueurs</button>
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