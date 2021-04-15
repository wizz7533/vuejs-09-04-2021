<template>
    <div>
        <!-- <h1>Hello World !</h1> -->
        <img
            v-if="loading"
            src="https://i.imgur.com/JfPpwOA.gif"
        >
        
        <transition name="fade">
            <div v-if="alert.visible" class="alert alert-success col-6 ml-auto mr-auto" role="alert">
                <strong>{{film.title}}</strong> a été {{alert.type == "added" ? 'ajouté': 'retiré'}} avec sucès à liste des Favoris.
                <button @click="closeAlert" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </transition>

        <div class="movie-container">
            <div class="card" style="width: 25rem;">
                <!-- <img class="card-img-top" :src="urlImg + film.poster_path" alt="Card image cap"> -->
                <img class="card-img-top" :src="urlImg + film.poster_path" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text"><b>Résumé: </b>{{ film.overview }}</p>
                    <p class="card-text">
                        Note moyenne: 
                        <img v-for="n in nbStars" :key="n" src="@/assets/star.svg" alt="" width="16">
                        <img v-for="n in (10 - nbStars)" :key="n+10" src="@/assets/star_empty.svg" alt="" width="16">
                    </p>
                    <p class="card-text"><b>Sortie le </b> {{ new Date(film.release_date).toLocaleDateString() }}</p>
                    <p class="card-text"><b>Genre: </b> <span v-for="(genre,index) of film.genres" :key="genre.id">{{ genre.name + ((film.genres.length == index + 1) ? '' : ', ') }}</span></p>
                </div>
            </div>
            <div class="actions-container">
                <a v-if="teaser" :href="'https://www.youtube.com/watch?v='+teaser.key">
                    <img src="@/assets/play.svg" alt="Lecture de la bande d'annonce" width="64">
                    {{ (teaser.name) ? teaser.name : "Aucun Teaser Disponible"}}
                </a>
                <a v-else class="teaser-not-found">
                    <img src="@/assets/play.svg" alt="Lecture de la bande d'annonce" width="64">
                    Aucune bande d'annonce disponibles
                </a>
                <p @click="toggleFav">
                    <span v-if="!isInFav">
                        <img id="add-fav" src="@/assets/empty_heart.svg" alt="Ajouter au favoris" width="64">
                        Ajouter aux favoris
                    </span>
                    <span v-else>
                        <img id="add-fav" src="@/assets/heart.svg" alt="Ajouter au favoris" width="64">
                        Retirer favoris
                    </span>
                </p>
                <button @click="$router.go(-1)" type="button" class="btn btn-secondary btn-back">
                    <img src="@/assets/back-arrow.svg" alt="" width="32">
                    Retour
                </button>   
            </div>
        </div>
    </div>
</template>

<script>
    import { 
        URL_BASE_IMG
    } from '@/constants/urls'
    
    export default {
         data() {
            return {
                loading: false,
                filmId: this.$route.params.id,
                state: this.$store.state.film,
                urlImg: URL_BASE_IMG,
                alert: { visible: false, type: null}
            }
        },
        computed: {
            film() {
                return this.state.film;
            },
            nbStars() {
                const note = this.state.film.vote_average ? Math.round(this.state.film.vote_average) : 0;
                return note;
            },
            teaser(){
                return this.state.teaser;
            },
            isInFav(){
                return this.state.favFilms.find(film => {
                    return film.id == this.film.id
                });
            }
        },
        methods: {
            toggleFav() {
                this.$store.dispatch('film/toggleFav',this.film).then(
                    (response) => this.alert.type = response
                );
                if (!this.alert.visible) {
                    this.alert.visible = true;
                } else {
                    this.alert.visible = false;
                    setTimeout(
                        () => {
                            this.alert.visible = true;
                        }, 200
                    )
                }
            },
            closeAlert(){
                this.visible = false;
            }
        },
        created() {
            this.loading = true
            this.$store.dispatch('film/fetchFilmById', this.filmId).then(() => this.loading = false) 
            this.$store.dispatch('film/fetchTeaserFilm', this.filmId).then() 
        }
    }
</script>

<style scoped>
    .movie-container {
        display: flex;
        justify-content: center;
    }

    .actions-container {
        display: flex;
        flex-direction: column;
        margin: 40px;
    }
    
    .actions-container p img, .actions-container a img{
        margin: 0 20px;
    }
    
    #add-fav {
        transition: 600ms;
    }

    #add-fav:hover { 
        transform: scale(1.2);
    }

    .btn-back {

    }

    .fade-enter-active {
      transition: opacity 500ms;
    }

    .fade-leave-active {
      transition: opacity 1s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>