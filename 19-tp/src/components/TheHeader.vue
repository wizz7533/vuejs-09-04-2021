<template>
    <div>
        <header>
            <h1>Gestionnaire de films</h1>
            <the-navigation-header></the-navigation-header>
        </header>
        <ul>
            <li>
                <router-link :to="{name: 'filmsList'}" class="link">
                    Liste des films
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'filmFavList'}"  class="link">
                    Mes Favoris
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import TheNavigationHeader from './TheNavigationHeader'

export default {
    components: {
        'the-navigation-header': TheNavigationHeader,
    }
}
</script>

<style scoped>
    header {
        display:flex;
        justify-content: space-between;
        background-color: #343a40;
        padding: 15px;
    }
    h1 {
        color: white;
    }

    ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
    }
    ul li {
        padding: 20px 0;
    }

    ul li .link {
        display: inline-block;
        padding: 15px;
        font-size: 1.3em;
        transition: 300ms;
    }

    ul li .link:hover {
        text-decoration: none;
        transform: scale(1.1);
    }

    .router-link-active {
         color: coral;
    }
</style>