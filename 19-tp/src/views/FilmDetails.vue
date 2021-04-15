<template>
    <div>
        <div class="card m-auto" style="width: 18rem;">
            <img class="card-img-top" :src="film.img" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{film.title}}</h5>
                <p class="card-text">{{film.description}}</p>
                <p class="card-text">sortie en {{film.annee}}</p>
                <a href="#" class="btn btn-primary">Retour</a>
            </div>
        </div> 
    </div>
</template>

<script>
    import filmStore from '@/store/oldStore/film'
    export default {
        data() {
            return {
                filmId: this.$route.params.id,
                state: filmStore.state
            }
        },
        computed: {
            films() {
                return this.state.films
            },
            film() {
                const film = this.films.find(
                    film => film.id == this.filmId
                )
                return film
            }
        },
    }
</script>

<style scoped>

</style>