<template>
    <div>
        <h1>Nameo</h1>
        <p>
            <button @click="next">Game Setup</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "Intro",
    methods: {
      next() {
        this.$store.dispatch('GameLaunched');
      }
    }
  };
</script>

<style scoped>

</style>