/*****************************
 * Toutes les urls disponible pour notre application seront regroupées ici.
 * on aurait pu appeler ce dossier api.
 * On decoupe notre url pour une meillere maintenabilité. Si demain ma clef d'API
 * Change je n'aurai plus qu'a modifier la constante.
 * Si la base de l'url change par exemple se termine par /4, pareil, je n'ai pas beosin
 * de modifier 5 ou 10 lignes, une seul suffira.
 */

const API_KEY = "123131ea405ceb7ba968916397a05764"

export const URL_BASE = 'https://api.themoviedb.org/3';
export const URL_BASE_IMG = "https://image.tmdb.org/t/p/w500";
export const URL_SEARCH = `${URL_BASE}/search/movie?api_key=${API_KEY}&language=fr-FR&append_to_response=credits&query=`
export const URL_MOVIE_DETAIL = `${URL_BASE}/movie/`
export const URL_START_VIDEO = `${URL_BASE}/movie/`
export const URL_END_VIDEO = `/videos?language=fr-FR&api_key=${API_KEY}`  
export const URL_PARAMS = `?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR`