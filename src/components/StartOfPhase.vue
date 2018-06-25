<template>
    <div>
        <h2>Phase {{ current }} : {{ phaseName(current) }}</h2>
        <ul v-if="current === 1">
            <li>Les joueurs doivent faire deviner un nom à leur équipe en respectant une règle :
                ils ne peuvent pas dire ou traduire le nom ou une partie du nom à faire deviner.</li>
            <li>Les co-équipiers peuvent donner autant de réponses qu'ils veulent.</li>
            <li>Les joueurs peuvent passer un nom mais encourent une pénalité de 3 secondes à chaque fois.</li>
            <li>Le tour d'un joueur dure 30 secondes.</li>
        </ul>
        <ul v-if="current === 2">
            <li>Les joueurs doivent faire deviner un des noms de la phase 1 en disant <b>un seul mot</b> !</li>
            <li>Ce mot ne peut toujours pas être une partie ou une traduction du nom à faire deviner.</li>
            <li>Les co-équipiers ne peuvent donner qu'<b>une seule réponse</b>.</li>
            <li>Les joueurs peuvent passer un nom sans pénalité.</li>
            <li>Le tour d'un joueur dure 30 secondes.</li>
        </ul>
        <ul v-if="current === 3">
            <li>Les joueurs doivent faire deviner un des noms de la phase 1 <b>en mimant, sans rien dire</b> !</li>
            <li>Les co-équipiers ne peuvent donner qu'<b>une seule réponse</b>.</li>
            <li>Les joueurs peuvent passer un nom sans pénalité.</li>
            <li>Le tour d'un joueur dure 30 secondes.</li>
        </ul>
        <p>
            <button @click="next">OK</button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  const phaseNames = {
    1: 'Libre',
    2: 'Indice',
    3: 'Mime',
  };

  export default {
    name: "StartOfPhase",
    computed: {
      ...mapGetters('phases', [
        'current',
      ]),
    },
    methods: {
      phaseName(phase) {
        return phaseNames[phase];
      },
      next() {
        this.$store.dispatch('PhaseStarts');
      },
    },
  };
</script>

<style scoped>

</style>