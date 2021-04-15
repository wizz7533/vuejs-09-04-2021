import axios from 'axios';
import {
    URL_SEARCH, 
    URL_START_VIDEO,
    URL_END_VIDEO,
    URL_MOVIE_DETAIL,
    URL_PARAMS,
} from '@/constants/urls'

export default {
    namespaced: true,
    state: {
        films: [
            // { id: 1, titre: 'Arsène Lupin', description: 'Lorem', annee: 2004 },
            // { id: 2, titre: 'Le prestige', description: 'Lorem Ipsum', annee: 2006 },
            // { id: 3, titre: 'Insaisissable', description: 'Dolor ipsum', annee: 2013 },
            // { id: 4, titre: 'Jeux interdits', description: 'Leviosa Ipsun', annee: 1952 },
            // { id: 5, titre: 'Joker', description: 'Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.', annee: 1952, img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zDyT3gIeae39UgL9P6jL5Zc3zyt.jpg"},
        ],
        favFilms: [],
        film: {},
        teaser: {},
        currentPage: 0,
        totalPage: 0,

    },
    getters: {
    },
    mutations: {
        setFilms(state, films) {
            state.films = films;
        },
        setCurrentPage(state, cpage) {
            state.currentPage = cpage;
        },
        setTotalPage(state, tpage) {
            state.totalPage = tpage;
        },
        setFilm(state, film) {
            state.film = film;
        },
        setTeaserFilm(state, teaser) {
            state.teaser = teaser;
        },
        addFilm(state, film) {
            state.films.push(film)
        },
        addToFavFilms(state, film) {
            state.favFilms.push(film)
        },
        removeFavFilms(state, index) {
            state.favFilms.splice(index, 1);
        }
    },
    actions: {
        fetchFilms(context, query) {
            return new Promise((resolve) => {
                axios.get(URL_SEARCH + query)
                    .then(response => {
                        console.log("Response : ", response);
                        const films = response.data.results.filter( film => film.overview);
                        console.log("reponse film:", response.data);
                        // context.commit('setFilms', response.data.results);
                        context.commit('setFilms', films);
                        context.commit('setCurrentPage', response.data.page);
                        context.commit('setTotalPage', response.data.total_pages);
                        resolve();
                    })
                    .catch(err => console.error("Axios failed fetchFilms: ", err))
            });
        },
        fetchFilmById(context, query) {
            return new Promise((resolve) => {
                axios.get(URL_MOVIE_DETAIL + query + URL_PARAMS)
                    .then(response => {
                        context.commit('setFilm', response.data);
                        resolve();
                    })
                    .catch(err => console.error("Axios failed fetchFilmById: ", err))
            });
        },
        fetchTeaserFilm(context, query) {
            return new Promise((resolve) => {
                axios.get(URL_START_VIDEO + query + URL_END_VIDEO)
                    .then(response => {
                        console.log("reponse:", response.data.results[0]);
                        context.commit('setTeaserFilm', response.data.results[0]);
                        resolve();
                    })
                    .catch(err => console.error("Axios failed fetchTeaserFilm: ", err))
            });
        },
        toggleFav(context, film) {
            const isFilm = context.state.favFilms.find(f => film.id == f.id)
            if (!isFilm) {
                context.commit('addToFavFilms', film)
                return 'added';
            } else {
                const index = context.state.favFilms.findIndex(f => film.id == f.id)
                context.commit('removeFavFilms', index)
                return 'removed';
            }
        },
        addToFav(context, film) {
            const isFilm = context.state.favFilms.find(f => film.id == f.id)
            if (!isFilm) {
                context.commit('addToFavFilms', film)
            }
        },
        removeFav(context, index) {
            if (index >= 0) {
                context.commit('removeFavFilms', index)
            }
        },
        addFilmIfNotExit(context, film) {
            const index = context.state.films.indexOf(film)
            if (index < 0) {
                context.commit('addProduct', film)
            }
        },
    }
};