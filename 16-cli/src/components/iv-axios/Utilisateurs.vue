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
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                utilisateurs: []
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
           }
        }
    }
</script>

<style scoped>

</style>