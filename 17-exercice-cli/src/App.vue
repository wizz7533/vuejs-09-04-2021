<template>
  <div>
      <v-header @send-search-parent="updateSearch($event)"> 
      </v-header>
      <the-body :search="search"></the-body>
  </div>
</template>

<script>
import TheBody from './components/ex1/TheBody';
import TheHeader from './components/ex1/TheHeader';

export default {
  name: 'App',
  data() {
        return {
            search: ''
        }
    },
    methods: {
        updateSearch(event) {
            this.search = event;
        }
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
