<template>
  <div>
    <v-title></v-title>
  </div>
</template>

<script>
import Title from './components/Title.vue';

export default {
  name: 'App',
  data() {
    return {
      message: 'Hello World !'
    }
  },
  components: {
    //  'Title': Title,
    //  Title,
    //  TheNavigationHeader,
    'v-title': Title
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
