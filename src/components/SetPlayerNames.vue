<template>
    <section class="section">
        <div class="container has-text-centered">
            <h2 class="title">Joueurs</h2>
            <div class="field" v-for="(player, playerId, index) in players">
                <label class="label" :for="playerId">Joueur n°{{ index+1 }}</label>
                <div class="control has-text-centered">
                    <input :id="playerId" v-model="names[playerId]" required class="input">
                </div>
            </div>
            <p>
                <button @click="next" class="button is-primary">Équipes</button>
            </p>
        </div>
    </section>
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