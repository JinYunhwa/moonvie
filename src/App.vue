<template>
  <div id="app">
    <MoonvieHeader />
    <router-view></router-view>
    <MoonvieFooter />
  </div>
</template>

<script>
import MoonvieHeader from './components/Header.vue';
import MoonvieFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    MoonvieHeader,
    MoonvieFooter,
  }
};
</script>

<style>
body {
  background-color: #919191;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  flex: 1;
}
</style>
