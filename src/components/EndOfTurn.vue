<template>
    <div>
        <p>
            <button @click="next">Continue</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "EndOfTurn",
    methods: {
      next() {
        this.$store.dispatch('TurnEnds');
      },
    },
  };
</script>

<style scoped>

</style>