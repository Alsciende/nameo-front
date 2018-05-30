<template>
    <div>
        After Turn
        <p>
            <button @click="next">Next Turn</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "AfterTurn",
    methods: {
      next() {
        this.$store.commit('router/change', 'before-turn');
      },
    },
  };
</script>

<style scoped>

</style>