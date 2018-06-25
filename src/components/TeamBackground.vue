<template>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <linearGradient id="progress" x1="0" x2="0" y1="0" y2="1">
                <stop stop-opacity="0.1" v-bind:offset="progression" :stop-color="icon.color"></stop>
                <stop v-if="useTimer" stop-opacity="0.5" v-bind:offset="progression" :stop-color="icon.color"></stop>
            </linearGradient>
        </defs>
        <rect fill="url(#progress)" x="0" y="0" width="100%" height="100%"></rect>
        <use :href="url(icon)" x="10%" y="10%" width="80%" height="80%" :fill="icon.color" fill-opacity="0.3"></use>
    </svg>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "TeamBackground",
    props: {
      useTimer: Boolean,
    },
    computed: {
      ...mapGetters('timer', [
        'progression',
      ]),
      ...mapGetters('players', [
        'getCurrentTeam',
      ]),
      icon() {
        return this.getCurrentTeam.icon;
      },
    },
    methods: {
      url(icon) {
        return `${process.env.BASE_URL}iconwar/${icon.file}#root`;
      },
    },
  };
</script>

<style scoped>
    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>