<template>
    <div>
        After Turn
        <p>
            <button @click="next">Continue</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "AfterTurn",
    methods: {
      next() {
        if(this.$store.getters['cards/drawCount'] === 0) {
          this.$store.commit('router/change', 'end-of-phase');
        } else {
          this.$store.commit('router/change', 'before-turn');
        }
      },
    },
  };
</script>

<style scoped>

</style>