<template>
    <div>
        Turn
        <h2>{{ timer }}</h2>
        <p>
            <button @click="success">Success</button>
            <button @click="failure">Failure</button>
        </p>
        <h2>{{ current }}</h2>
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
        'current',
      ]),
    },
    methods: {
      success() {
        this.$store.dispatch('cards/success');
      },
      failure() {
        this.$store.dispatch('cards/failure');
      },
    },
  };
</script>

<style scoped>

</style>