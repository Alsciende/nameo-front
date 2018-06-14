<template>
    <div>
        <p>
            I detected a previous game started on {{ startedAt }}.
        </p>
        <p>
            What do you want to do?
        </p>
        <p>
            <button @click="resume">Resume the previous game</button>
        </p>
        <p>
            <button @click="quit">Start a new game</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: "ResumeGame",
    computed: {
      startedAt() {
        return (new Date(this.$store.getters.getStartedAt)).toString();
      }
    },
    methods: {
      resume() {
        this.$store.dispatch('ResumeGame');
      },
      quit() {
        this.$store.dispatch('QuitGame');
      }
    }
  };
</script>

<style scoped>

</style>