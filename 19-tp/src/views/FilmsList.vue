<template>
    <div>
        <h1>Films à ajouter dans votre liste</h1>
        <img
            v-if="loading"
            src="https://i.imgur.com/JfPpwOA.gif"
        >

        <!-- 
            Si on peut facilement ajouter des animations sur nos éléments vue.js
            il suffit d'utiliser la balise transition avec un nom qui correspond a ce qu'on veut
         -->
        <transition name="fade">
            <div v-if="alert.visible" class="alert alert-success col-6 ml-auto mr-auto" role="alert">
                <strong>{{alert.filmTitle}}</strong> a été {{alert.type == "added" ? 'ajouté' : 'retiré'}} avec succès à liste des Favoris.
                <button @click="closeAlert" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </transition>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Description</th>
                    <th scope="col">Année de sortie</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(film,index) in filmsFinded" :key="film.titre">
                    <td>{{index + 1}}</td>
                    <td>{{film.title}}</td>
                    <td>{{film.overview.substring(0, 150)}}</td>
                    <td>{{ new Date(film.release_date).toLocaleDateString() }}</td>    
                    <td>
                        <!-- <img class="add-fav" @click="addToFav(index)" title="Ajouter au favoris" width="32" :src="require('@/assets/heart.svg')" alt=""> -->
                        <img
                            class="add-fav"
                            @click="toggleFav(index)"
                            title="Ajouter au favoris"
                            width="32"
                            :src="require('@/assets/' + (isInFav(film.id) ? 'heart.svg' : 'empty_heart.svg'))"
                            :alt="isInFav(film.id) ? 'Add to Fav icon' : 'Remove Fav icon'">
                        <router-link :to="{name: 'filmListDetails', params: {id: film.id}}">
                            <img :src="require('@/assets/search.svg')" width="32" alt="" title="Voir plus de détails">
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav>
            <ul class="pagination">
                <li class="page-item" :class="{disabled: previousButtonDisabled}">
                    <a  @click="getPage(-1)" href="#" class="page-link" :tabindex="previousButtonDisabled ? -1 : 1" :aria-disabled="previousButtonDisabled">Précédent</a>
                </li>
                <p>
                     Page {{currentPage}} / {{totalPage}}
                </p>
                <li class="page-item" :class="{disabled: nextButtonDisabled}">
                    <a class="page-link" @click="getPage(1)" href="#">Suivant</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                navState: this.$store.state.nav,
                filmState: this.$store.state.film,
                alert: { visible: false, fimlTitle: null, type: null}
            }
        },
        methods: {
            toggleFav(index) {
                this.$store.dispatch('film/toggleFav',this.filmState.films[index]).then(
                    (response) => this.alert.type = response
                );
                if (!this.alert.visible) {
                    this.alert.visible = true;
                    this.alert.filmTitle = this.filmState.films[index].title;
                } else {
                    this.alert.visible = false;
                    setTimeout(
                        () => {
                            this.alert.visible = true;
                            this.alert.filmTitle = this.filmState.films[index].title;
                        }, 200
                    )
                }
            },
            getPage(index) {
                const page = this.currentPage + index;
                let query = (this.searched) ? this.searched : "a";
                query += `&page=${page}`
                console.log("Query: " + query);
                this.loading = true
                this.$store.dispatch('film/fetchFilms', query).then(() => this.loading = false) 
            },
            closeAlert(){
                this.alert.visible = false;
            },
            isInFav(id) {
                // console.warn("id: ", id);
                // console.warn(this.filmState.favFilms);
                if (!this.filmState.favFilms.length) {
                    return false;
                }
                return this.filmState.favFilms.find(film => {
                    return film.id == id
                });
            }
        },
        computed: {
            searched() {
                return this.navState.nomDuFilm
            },
            films() {
                return this.filmState.films
            },
            filmsFinded() {
                const nomFilm = this.searched
                let filmsTmp = []
                if (nomFilm) {
                    filmsTmp = this.films.filter(
                        (film) => {
                            return film.title.toLowerCase().includes(nomFilm.toLowerCase());
                        }
                    )
                } else {
                    filmsTmp = [...this.films]
                }
                return filmsTmp
            },
            totalPage() {
                return this.filmState.totalPage; 
            },
            currentPage() {
                return this.filmState.currentPage; 
            },
            previousButtonDisabled() {
                return this.currentPage <= 1
            },
            nextButtonDisabled() {
                return this.currentPage >= this.totalPage
            }
        },
        watch: {
            searched(value){
                this.$store.dispatch('film/fetchFilms', value).then(() => this.loading = false) 
            },
            // currentPage(value){

            // }
        },
        created() {
            const query = (this.searched) ? this.searched : "a";
            this.loading = true
            this.$store.dispatch('film/fetchFilms', query).then(() => this.loading = false) 
        }
    }
</script>

<style scoped>
    div {
        text-align: center;
    }
    .add-fav {
        transition: 600ms;
    }
    .add-fav:hover { 
        transform: scale(1.2);
    }

    nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav ul p {
        margin: 0 15px;
    }

    .fade-enter-active {
      transition: opacity 300ms;
    }

    .fade-leave-active {
      transition: opacity 600ms;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>