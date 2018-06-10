<template>
    <div>
        <h2>End of your turn, {{ currentPlayerName }}</h2>
        <h3>Won: {{ won.length }} cards</h3>
        <h3>Lost: {{ lost.length }} cards</h3>
        <p>
            <button @click="next">Continue</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "EndOfTurn",
    computed: {
      ...mapGetters('players', [
        'currentPlayerName',
      ]),
      ...mapGetters('cards', [
        'won',
        'lost',
      ]),
    },
    methods: {
      next() {
        this.$store.dispatch('TurnEnds');
      },
    },
  };
</script>

<style scoped>

</style>