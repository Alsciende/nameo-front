<template>
    <section class="section">
        <div class="container has-text-centered">
            <h1 class="title">Nameo</h1>
            <h2 class="subtitle">Le jeu du chapeau</h2>
            <p>
                Faites deviner un maximum de noms célèbres à votre équipe
            </p>
            <p>
                La partie se joue en 3 phases :
            </p>
            <ol>
                <li>On dit tout ce qu'on veut</li>
                <li>On dit un seul mot</li>
                <li>On mime !</li>
            </ol>
            <p>
                <button @click="next" class="button is-primary">Commencer</button>
            </p>
        </div>
    </section>
</template>

<script>
  export default {
    name: "Intro",
    methods: {
      next() {
        this.$store.dispatch('GameLaunched');
      },
    },
  };
</script>

<style scoped>

</style>