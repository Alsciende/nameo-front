<template>
    <div>
        <h2>This is the turn of {{ currentPlayerName }}</h2>
        <h4>Timer:</h4>
        <h2>{{ timer }}</h2>
        <h4>Your card:</h4>
        <h2>{{ getCurrentCardName }}</h2>
        <p>
            <button @click="success">Success</button>
            <button @click="failure">Failure</button>
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="icon">
            <defs>
                <linearGradient id="progress" x1="0" x2="0" y1="0" y2="1">
                    <stop id="stop1" stop-opacity="0.1" v-bind:offset="progression" :stop-color="icon.color"></stop>
                    <stop id="stop2" stop-opacity="0.5" v-bind:offset="progression" :stop-color="icon.color"></stop>
                </linearGradient>
            </defs>
            <rect fill="url(#progress)" x="0" y="0" width="100%" height="100%"></rect>
            <use :href="url(icon)" x="10%" y="10%" width="80%" height="80%" :fill="icon.color" fill-opacity="0.3"></use>
        </svg>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "Turn",
    data() {
      // icons designed by Alena Artemova
      const icons = ([
        {
          file: 'strawberry.svg',
          color: '#ee2e31',
        },
        {
          file: 'apple.svg',
          color: '#3ec300',
        },
        {
          file: 'eggplant.svg',
          color: '#772583',
        },
        {
          file: 'banana.svg',
          color: '#f9c440',
        },
      ]);

      return {
        icon: icons[Math.floor(icons.length * Math.random())],
      };
    },
    computed: {
      ...mapGetters('timer', [
        'timer',
        'progression',
      ]),
      ...mapGetters('cards', [
        'getCurrentCardName',
      ]),
      ...mapGetters('players', [
        'currentPlayerName',
      ]),
    },
    methods: {
      url(icon) {
        return `${process.env.BASE_URL}iconwar/${icon.file}#root`;
      },
      success() {
        this.$store.dispatch('CardIsWon');
      },
      failure() {
        this.$store.dispatch('CardIsLost');
      },
    },
  };
</script>

<style scoped>
    #icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>