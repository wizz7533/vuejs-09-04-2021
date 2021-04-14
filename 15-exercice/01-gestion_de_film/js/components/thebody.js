
const TheBody = {
    name: 'Body',
    data() {
        return {
            movies: [
                { title: 'Arsène Lupin', description: 'Lorem', year: 2004 },
                { title: 'Le prestige', description: 'Lorem Ipsum', year: 2006 },
                { title: 'Insaisissable', description: 'Dolor ipsum', year: 2013 },
                { title: 'Jeux interdits', description: 'Leviosa Ipsun', year: 1952 }
            ]
        }
    },
    methods: {
        addMovie(event) {
            let title = event.target.title.value;
            let description = event.target.description.value;
            let year = event.target.year.value;

            let movie = {
                title,
                description,
                year
            }

            this.movies.push(movie);
        },
        removeMovie(index) {
            this.movies.splice(index, 1);
        }
    },
    template: `
        <table v-if="movies.length" class="table table-striped table-hover">
            <thead class="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Description</th>
                    <th scope="col">Année de sortie</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(movie, index) of movies">
                    <th scope="row">{{index + 1}}</th>
                    <td>{{movie.title}}</td>
                    <td>{{movie.description}}</td>
                    <td>{{movie.year}}</td>
                    <td>
                        <img
                            @click="removeMovie(index)"
                            src="./assets/remove.svg" 
                            alt="icone suppression du film"
                            width="32">
                    </td>
                </tr>
            </tbody>
        </table>
        <h2 v-else>Aucun film disponible</h2>
    `
}

export default TheBody;