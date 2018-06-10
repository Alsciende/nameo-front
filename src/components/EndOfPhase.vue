<template>
    <div>
        <ul>
            <li v-for="(pile, team) in score">
                {{ teamName(team) }} => {{ pile.length }}
            </li>
        </ul>
        <p>
            <button @click="next">Next Phase</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "EndOfPhase",
    computed: {
      ...mapGetters('players', [
        'teamName',
      ]),
      ...mapGetters('cards', [
        'score',
      ]),
    },
    methods: {
      next() {
        this.$store.dispatch('PhaseEnds');
      },
    },
  };
</script>

<style scoped>

</style>