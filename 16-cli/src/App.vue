<template>
  <div>
    <v-title></v-title>
    <Counter></Counter>
  </div>
</template>

<script>
import Title from './components/i-decouverte/Title.vue';
import Counter from './components/ii-store/Counter';

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
    'v-title': Title,
    Counter
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
