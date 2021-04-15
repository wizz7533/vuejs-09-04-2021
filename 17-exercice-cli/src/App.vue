<template>
  <div>
      <v-header></v-header>
      <the-body></the-body>
  </div>
</template>

<script>
// import TheBody from './components/ex1/TheBody';
// import TheHeader from './components/ex1/TheHeader';
import TheBody from './components/ex2/TheBody';
import TheHeader from './components/ex2/TheHeader';

export default {
  name: 'App',
  data() {
        return {
        }
    },
    methods: {
    },
    components: {
        'v-header': TheHeader,
        'the-body': TheBody
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
