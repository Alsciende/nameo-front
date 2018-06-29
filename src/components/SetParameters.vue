<template>
    <section class="section">
        <div class="container has-text-centered">
            <h2 class="title">Paramétrage</h2>
            <div class="field">
                <label class="label" for="nbPlayersInput">Nombre de joueurs</label>
                <div class="control has-text-centered">
                    <div class="select">
                        <select id="nbPlayersInput" v-model="nbPlayers">
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label" for="nbTeamsInput">Nombre d'équipes</label>
                <div class="control has-text-centered">
                    <div class="select">
                        <select id="nbTeamsInput" v-model="nbTeams">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Difficulté</label>
                <div class="control has-text-centered">
                    <label class="radio">
                        <input type="radio" value="0" v-model="difficulty">
                        Très facile
                    </label>
                </div>
                <div class="control has-text-centered">
                    <label class="radio">
                        <input type="radio" value="1" v-model="difficulty">
                        Facile
                    </label>
                </div>
                <div class="control has-text-centered">
                    <label class="radio">
                        <input type="radio" value="2" v-model="difficulty">
                        Moyen
                    </label>
                </div>
                <div class="control has-text-centered">
                    <label class="radio">
                        <input type="radio" value="3" v-model="difficulty">
                        Difficile
                    </label>
                </div>
                <div class="control has-text-centered">
                    <label class="radio">
                        <input type="radio" value="4" v-model="difficulty">
                        Très difficile
                    </label>
                </div>
            </div>
            <p>
                <button @click="next" class="button is-primary">Noms des joueurs</button>
            </p>
        </div>
    </section>
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