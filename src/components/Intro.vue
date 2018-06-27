<template>
    <div class="jumbotron">
        <h1>Nameo</h1>
        <p class="lead">Le jeu du chapeau</p>
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
            <button @click="next" type="button" class="btn btn-primary btn-lg">Commencer</button>
        </p>
    </div>
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