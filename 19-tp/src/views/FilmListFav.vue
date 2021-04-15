<template>
    <main style="margin-top: 50px">
        <transition name="fade">
            <div v-if="alert.visible" class="alert alert-success col-6 ml-auto mr-auto" role="alert">
                <strong>{{alert.filmTitle}}</strong> a été retiré avec succès à liste des Favoris.
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
                <template v-if="!favFilms.length">
                        <p>Aucun film trouvé</p>
                </template>
                <template v-else>
                    <tr v-for="(film,index) in favFilms" :key="film.id">
                        <td>{{film.id}}</td>
                        <td>{{film.title}}</td>
                        <td>{{film.overview}}</td>
                        <td>{{ new Date(film.release_date).toLocaleDateString() }}</td>    
                        <td>
                            <img @click="removeFav(index)" width="32" :src="require('@/assets/delete.svg')" alt="">
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </main>
</template>
<script>
export default {
    data: function() {
        return {
            state: this.$store.state.film,
            alert: { visible: false, fimlTitle: null}
        }
    },
    computed: {
        favFilms() {
            // console.log(this.$store.state.film);
            return this.state.favFilms;
        },
        
    },
    methods: {
        removeFav(index){
            const movieName = this.favFilms[index].title;
            if (!this.alert.visible) {
                this.alert.visible = true;
                this.alert.filmTitle = movieName;
            } else {
                this.alert.visible = false;
                setTimeout(
                    () => {
                        this.alert.visible = true;
                        this.alert.filmTitle = movieName;
                    }, 200
                )
            }
            this.$store.dispatch('film/removeFav', index);
        },
        closeAlert(){
            this.alert.visible = false;
        }
    },
}
</script>

<style>

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