<template>
    <nav class="navbar navbar-light bg-dark">
        <form class="form-inline" @submit.prevent="filtrerFilms">
            <input class="form-control mr-sm-2" name="nomdufilm" type="search" placeholder="ex: Avatar">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Recherche</button>
        </form>
    </nav>
</template>
<script>
// import navStore from '@/store/nav'

export default {
    name: 'TheNavigationHeader',
    methods: {
        filtrerFilms(event) {
            const nomFilm = event.target.nomdufilm.value
            // navStore.updateName(nomFilm)
            this.$store.commit('nav/updateName', nomFilm)
        }
    }
}
</script>

<style scoped>
    nav {
        display: flex;
    }
    nav ul {
        display: flex;
        list-style-type: none;
        color: white;
    }
</style>