<template>
    <div>
        <md-app md-waterfall md-mode="overlap">
            <md-app-toolbar class="md-primary md-large">
                <div class="md-toolbar-row">
                    <span class="md-title">Nameo</span>
                </div>
            </md-app-toolbar>

            <md-app-content>
                <h2>Le jeu du chapeau</h2>
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
                    <md-button @click="next" class="md-raised md-primary">Commencer</md-button>
                </p>
            </md-app-content>
        </md-app>
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