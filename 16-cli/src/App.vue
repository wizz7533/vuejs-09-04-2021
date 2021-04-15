<template>
  <div>
      <h1>VueJS</h1>
      <navigation></navigation>
      <!-- 
        Charge ici le composant associé a l'URL
       -->
      <router-view 
        :key="$route.path">
      </router-view>
  </div>
</template>

<script>
  import Navigation from './components/Navigation';
  export default {
    name: 'root',
    components: {
      Navigation
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
