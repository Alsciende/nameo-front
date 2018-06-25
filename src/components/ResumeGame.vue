<template>
    <div>
        <h1>Reprise de partie</h1>
        <p>
            Une partie a été commencée {{ startedAt }}.
        </p>
        <p>
            Que voulez-vous faire ?
        </p>
        <p>
            <button @click="resume">Reprendre cette partie</button>
        </p>
        <p>
            <button @click="quit">Commencer une nouvelle partie</button>
        </p>
    </div>
</template>

<script>
  import moment from 'moment';
  moment.locale('fr');

  export default {
    name: "ResumeGame",
    computed: {
      startedAt() {
        return moment(this.$store.getters.getStartedAt).fromNow();
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