<template>
    <section class="section">
        <div class="container has-text-centered">
            <h1 class="title">Reprise de partie</h1>
            <p>
                Une partie a été commencée {{ startedAt }}.
            </p>
            <p>
                Que voulez-vous faire ?
            </p>
            <p>
                <button @click="resume" class="button">Reprendre cette partie</button>
            </p>
            <p>
                <button @click="quit" class="button">Commencer une nouvelle partie</button>
            </p>
        </div>
    </section>
</template>

<script>
  import moment from 'moment';

  moment.locale('fr');

  export default {
    name: "ResumeGame",
    computed: {
      startedAt() {
        return moment(this.$store.getters.getStartedAt).fromNow();
      },
    },
    methods: {
      resume() {
        this.$store.dispatch('ResumeGame');
      },
      quit() {
        this.$store.dispatch('QuitGame');
      },
    },
  };
</script>

<style scoped>

</style>