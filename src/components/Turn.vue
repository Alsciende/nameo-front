<template>
    <div>
        <h2>This is the turn of {{ currentPlayerName }}</h2>
        <h4>Timer:</h4>
        <h2>{{ timer }}</h2>
        <h4>Your card:</h4>
        <h2>{{ getCurrentCardName }}</h2>
        <p>
            <button @click="success">Success</button>
            <button @click="failure">Failure</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "Turn",
    computed: {
      ...mapGetters('timer', [
        'timer',
      ]),
      ...mapGetters('cards', [
        'getCurrentCardName',
      ]),
      ...mapGetters('players', [
        'currentPlayerName',
      ]),
    },
    methods: {
      success() {
        this.$store.dispatch('CardIsWon');
      },
      failure() {
        this.$store.dispatch('CardIsLost');
      },
    },
  };
</script>

<style scoped>

</style>