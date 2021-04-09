let prenom = "David";
let nom = 'Doe';
let adresse = `3ter 'rue' "d'arsonval", ${75015}`;

console.log(prenom);
console.log(nom);
console.log(adresse);

const tableau = [1,5,10];

let [a, b, reste] = tableau;
[a, b, ...reste] = tableau;


let voiture = {
    couleur: "bleu"
};

console.log("Couleur de la voiture: " + voiture.couleur);

let tableau2 = tableau;
tableau2.push('Yohann');
console.log(tableau);

// Copier un tableau
tableau2 = [...tableau];
// Copier un objet
const voiture2 = {...voiture};
console.log(voiture2);
voiture2.couleur = "Rouge"
console.log("voiture2: ", voiture2);
console.log("voiture: ", voiture);


let nombres = [2,7,9,9];
for (const nombre of nombres) {
    console.log("Nombre: " + nombre);
}

console.log("_______ Fonction anonymes _______");

function afficherNom(prenom) {
    console.log("Le prenom: " + prenom);
}

function queDoisJeFaireDeCePrenom(myCallBack) {
    prenom = "Maude";
    myCallBack(prenom);
}

queDoisJeFaireDeCePrenom(afficherNom);

// Fonction anonyme
queDoisJeFaireDeCePrenom(function(prenom) {
    console.log("Le prenom: " + prenom.toUpperCase());
})

// Fonction flechée
queDoisJeFaireDeCePrenom((prenom) => {
    console.log("Le prenom: " + prenom.toUpperCase());
})
queDoisJeFaireDeCePrenom(prenom => console.log("Le prenom: " + prenom.toUpperCase()))

voiture = {
    couleur: 'rouge',
    freiner: function() {

    },
    accelerer() {

    }
}


class MyArray {
    // Regroupe tous les arguments sous forme de tableau
    // permet de faire une fonciton qui prend un nombre indeterminé d'arguments
    constructor(...prenoms) {
        // console.log("Prenoms: ", prenoms);
        this.monTableau = prenoms;
    }

    myForEach(maCallBack) {
        for (const element of this.monTableau) {
            maCallBack(element);
        }
    }
    myFilter(maCallBack) {
        const newTableau = [];
        for (const element of this.monTableau) {
            let isSuperieur = maCallBack(element);
            if (isSuperieur) {
                newTableau.push(element);
            }
        }   
        return newTableau;
    }

    myMap() {

    }
}

let prenoms = ['Maude', 'Ella', 'Rick', 'Alain'];
prenoms = new Array('Maude', 'Ella', 'Rick', 'Alain');
console.log(prenoms);

console.warn(" => forEach");
prenoms.forEach(function(prenom) {
  let prenomSensInverse = prenom.split('').reverse().join('');
  console.log("Le prenom: " + prenomSensInverse);
})

tableau2 = prenoms.filter(function(prenom) {
    return (prenom.length > 4)
});
console.log(tableau2);

console.warn(" => MyForEach");
prenoms = new MyArray('Maude', 'Ella', 'Rick', 'Alain')
prenoms.myForEach(function(prenom) {
    let prenomSensInverse = prenom.split('').reverse().join('');
    console.log("Le prenom: " + prenomSensInverse);
});
tableau2 = prenoms.myFilter(prenom => prenom.length > 4);
console.log(tableau2);