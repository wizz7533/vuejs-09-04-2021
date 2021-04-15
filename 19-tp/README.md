# Tp-final

## lorsqu'on télécharge ce projet, il faut se rendre dans le répétoire et faire
```
npm install
```

### Compiler et avoir le rechargement a chaud pour le développement
```
npm run serve
```

# Les points non abordés en formations:

### Urls

Dans ``` src/constants/api```  
Toutes les urls disponibles pour notre application seront regroupées ici.  
Nous aurions pu aussi, appeler ce dossier api.  
On découpe nos urls pour une meilleure maintenabilité de notre code . En effet,  si demain ma clef d'API change je n'aurai qu'un seul champ à modifier.  
Si la base de l'url change par exemple, et se termine par /4, pareil, je n'ai pas besoin de modifier 5 ou 10 lignes.  
Une seule suffira.

### Transition 

Dans ``` src/views/FilmsList.vue``` 
 
On peut ajouter facilement des animations sur nos éléments avec vue.js.  
il suffit d'utiliser la balise **&lt;transition&gt;&lt;/transition&gt;** avec un attribut name qui correspond à ce que l'on veut. 
par exemple: name="fade"

Il suffit ensuite de reprendre ce nom, dans le style css, et ajouter un le prefixe v-enter ou v-leave
Dans la balise &lt;style&gt;&lt;/style&gt;
```
.fade-v-enter { 
    opacity: 0; 
}

.fade-enter-active { 
    transition: opacity 1s; 
}

```
Documentation:
https://vuejs.org/v2/guide/transitions.html

### Alert / Pop up
Pour l'alert, on se base sur l'élément [Bootstrap Dismissing](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing), sans le jquery puisqu'on va masquer/afficher les éléments avec la directive v-if.

```
<transition name="fade">
    <div v-if="alert.visible" class="alert alert-success col-6 ml-auto mr-auto" role="alert">
        <strong>{{alert.filmTitle}}</strong> a été {{alert.type == "added" ? 'ajouté' : 'retiré'}} avec succès à liste des Favoris.
        <button @click="closeAlert" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</transition>
```

Lorsque l'utilisateur cliquera sur la croix, l'alert se fermera avec une animation.
On passe ```this.alert.visible``` à false. 
On utlise un setTimeOut pour decaler l'ouverture des alerts. C'est a dire réouvrir l'alert 200ms plus tard.  
Ainsi on aura un meilleur effet visuel.  
Pour le voir on peut modifier la valeur 200 -> 600 

```
toggleFav(index) {
    ...
    if (!this.alert.visible) {
    ...
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
```

### Pagination

On se base sur les éléments bootstrap pour la [pagination](https://getbootstrap.com/docs/4.0/components/pagination/#disabled-and-active-states). Avec quelques modification. 

On utilise un simple texte car, il se peut que nous ayons 500 pages voir plus. Donc pour faciliter l'affichage, on se contente de récuperer la page courante et le nombre de page totale.
 
```
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
```
La fonction getPage permet de relancer une requête avec axios en ajoutant ou retirant une page. 

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
