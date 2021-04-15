<template>
    <nav class="navbar navbar-dark bg-dark">
        <form style="display: flex" class="form-inline" @submit.prevent="sendSearch($event)">
            <input class="form-control mr-sm-2" name="search" type="search" placeholder="ex: Avatar" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
        </form>
    </nav>
</template>
<script>
    export default {
        name: 'Navigation',
        data() {
            return {

            }
        },
        methods: {
            sendSearch(event) {
                const searched = event.target.search.value;
                this.$store.commit('setName', searched);
            }
        },
    }
</script>
