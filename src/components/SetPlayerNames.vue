<template>
    <div>
        <p v-for="(player, id, index) in players">
            <label>Player {{ index }}</label>
            <input v-model="names[id]">
        </p>
        <p>
            <button @click="next">Player Teams</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import mapValues from 'lodash/mapValues';

  export default {
    name: "SetPlayerNames",
    data() {
      return {
        names: mapValues(this.$store.getters['players/players'], value => value.name),
      }
    },
    computed: {
      ...mapGetters('players', [
        'players',
      ]),
    },
    methods: {
      next() {
        this.$store.dispatch('PlayerNamesSet', this.names);
      },
    },
  };
</script>

<style scoped>

</style>