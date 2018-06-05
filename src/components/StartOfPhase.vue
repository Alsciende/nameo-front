<template>
    <div>
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
        this.$store.dispatch('PhaseStarts');
      },
    },
  };
</script>

<style scoped>

</style>