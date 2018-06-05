<template>
    <div>
        <p>
            <button @click="startTurn">Start Turn</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "StartOfTurn",
    methods: {
      startTurn() {
        this.$store.dispatch('TurnStarts');
      },
    },
  };
</script>

<style scoped>

</style>