<template>
    <div>
        <p v-if="!utilisateurs.length">Aucun utilisateurs</p>
        <ul v-else>
            <li :key="u.id" v-for="u of utilisateurs">
                {{u.name}}
            </li>
        </ul>

        <button @click="getUser">
            Recuperer les utilisateurs
        </button>
        <button @click="postTopic">
            Creer un topic
        </button>

        <hr/>

        <p v-if="!movies.length">Aucun Films</p>
        <ul v-else>
            <li :key="movie.id" v-for="movie of movies">
                {{movie.title}}
            </li>
        </ul>
        <input type="text" placeholder="ex:Avatar" v-model="nomDuFilm">
        <button @click="getMovies">
            Recuperer les films
        </button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                utilisateurs: [],
                movies: [],
                nomDuFilm: ''
            }
        },
        methods: {
            async getUser() {
                const reponse = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                // console.log("reponse: ", reponse);
                const data = reponse.data
                this.utilisateurs = data;
            },
            async getMovies() {
                const URL = "https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query="
                const reponse = await axios.get(
                    URL + this.nomDuFilm
                );
                console.log("reponse: ", reponse);
                const data = reponse.data
                this.movies = data.results;
            },
            async postTopic() {
               const data = {
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
               }
               const reponse = await axios.post(
                   'https://jsonplaceholder.typicode.com/posts',
                   data
                );
                console.log("Reponse: ", reponse);
            }
        }
    }
</script>

<style scoped>

</style>