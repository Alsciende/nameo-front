<template>
    <div>
        Before Turn
        <p>
            <button @click="startTurn">Start Turn</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "BeforeTurn",
    methods: {
      startTurn() {
        this.$store.dispatch('timer/start', 10);
        this.$store.commit('router/change', 'turn');
      },
    },
  };
</script>

<style scoped>

</style>