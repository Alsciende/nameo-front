<template>
    <div>
        <h1>Joueurs</h1>
        <p v-for="(player, playerId, index) in players">
            <label :for="playerId">Joueur n°{{ index+1 }}</label><br/>
            <input :id="playerId" v-model="names[playerId]" required>
        </p>
        <p>
            <button @click="next">Équipes</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import mapValues from 'lodash/mapValues';
  import every from 'lodash/every';

  export default {
    name: "SetPlayerNames",
    data() {
      return {
        names: mapValues(this.$store.getters['players/players'], value => value.name),
      };
    },
    computed: {
      ...mapGetters('players', [
        'players',
      ]),
    },
    methods: {
      next() {
        if (every(this.names)) {
          this.$store.dispatch('PlayerNamesSet', this.names);
        } else {
          alert('Tous les joueurs doivent avoir un nom.');
        }
      },
    },
  };
</script>

<style scoped>

</style>