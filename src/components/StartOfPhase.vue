<template>
    <div>
        <h2>Phase {{ current }}</h2>
        <p>
            <button @click="next">Go</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "StartOfPhase",
    computed: {
      ...mapGetters('phases', [
        'current',
      ]),
    },
    methods: {
      next() {
        this.$store.dispatch('PhaseStarts');
      },
    },
  };
</script>

<style scoped>

</style>