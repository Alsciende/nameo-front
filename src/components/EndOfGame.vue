<template>
    <div>
        <p>
            <button @click="next">Play Again</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "end-of-game",
    methods: {
      next() {
        this.$store.dispatch('GameStarts');
      },
    },
  };
</script>

<style scoped>

</style>