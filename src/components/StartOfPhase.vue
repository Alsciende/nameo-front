<template>
    <div>
        Start of Phase
        <p>
            <button @click="next">Go</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "StartOfPhase",
    methods: {
      next() {
        this.$store.commit('cards/reset');
        this.$store.commit('cards/begin');
        this.$store.commit('router/change', 'before-turn');
      },
    },
  };
</script>

<style scoped>

</style>