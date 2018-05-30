<template>
    <div>
        End of Phase
        <p>
            <button @click="next">Next Phase</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "EndOfPhase",
    methods: {
      next() {
        this.$store.commit('router/change', 'start-of-phase');
      },
    },
  };
</script>

<style scoped>

</style>