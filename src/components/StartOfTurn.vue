<template>
    <div>
        <h2>This is the turn of {{ currentPlayerName }}</h2>
        <p>
            <button @click="startTurn">Start Turn</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "StartOfTurn",
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