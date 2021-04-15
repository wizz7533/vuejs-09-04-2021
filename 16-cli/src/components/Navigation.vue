<template>
    <nav>
        <ul>
            <!-- 
            <a href="/">Accueil</a> on ne veut plus utiliser cette balise car elle recharge la page 
            -->
            <router-link to="/">Accueil</router-link> | 
            <router-link to="/count">Count</router-link> |
            <router-link to="/params/1">Params 1</router-link> |
            <router-link to="/params/42">Params 42</router-link> | 
            <router-link v-bind:to="{name: 'retour'}"> |
                Retour
            </router-link> |
            <router-link to="/daskdsakd">Not found</router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>