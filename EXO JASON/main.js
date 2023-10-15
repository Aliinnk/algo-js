let tab_caracteristiques = ['lent', 'tétu', 'sportif', 'voyant', 'sourd', 'petit']
let tab_prenoms = ['Alba', 'Judith', 'Abby', 'Florian', 'Antonin']
let probas = [0.2, 0.4, 0.5];
const random_5 = Math.floor(Math.random() * tab_caracteristiques.length);
const random_3 = Math.floor(Math.random() * probas.length);
let mort = [];
let dmg = 0
//création de tableaux regroupants les caractéristiques, prenoms et les probabilitées possibles
//création de deux variables ''random'' pour mon tab de caractéristiques, prénoms et probas
//création du tableaux regroupant les personnages morts, dégats
class Tueur {
    constructor(nom) {
        this.nom = nom;
        this.pv = 100;
    }
}
//création de mon tueur Jason, il a 100 de pts de vie
class Victime {
    constructor() {
        this.caracteristiques = tab_caracteristiques[random_5];
        this.prenom = tab_prenoms[random_5];
        this.p_mourir = probas[random_3];
        this.p_degats = probas[random_3];
        this.p_mort_degats = probas[random_3];
    }
}
//constructeur pour les victimes du tueur, avec leurs caractéristiques aléatoires
//leurs prénoms aléatoires et leurs probabilités de mourir, infliger des dégats et mourir en infligeant des dégats

function attaque(victime, tueur) {
    //fonction qui va permettre de décider du sort des victimes selon leurs probabilités
    if (victime.p_mourir == 0.2) {
        mort.push(victime);
        console.log('mort');
        //la victime meurt
    }
    if (victime.p_degats == 0.5){
        tueur.pv -= 10;
        dmg = 10;
        console.log('degats');
        //la victime inflige -10 pts de vie à Jason
    }
    if (victime.p_mort_degats == 0.3) {
        tueur.pv -=  15;
        mort.push(victime);
        dmg = 15;
        console.log('degats mort');
        //la victime inflige -15 pts de vie à Jason et meurt
    }
}

function verifier_mort(prenom) {
    for (let index = 0; index < mort.length; index++) {
        if (mort[i] == prenom) {
            console.log('True')
        }
        else {console.log('False');}
        
    }
    //fonction permettant de vérifier si le joueur est mort ou non
}

//création des 5 victimes et du tueur
let Jason = new Tueur('Jason')
let victime1 = new Victime()
let victime2 = new Victime()
let victime3 = new Victime()
let victime4 = new Victime()
let victime5 = new Victime()


while (Jason.pv > 0) {
    //tant que le tueur n'est pas mort, les survivants continuent à fuir et à infliger des dégats
    if (mort.length == 5) {
        //je verifie si toutes les victimes ne sont pas mortes
        console.log("tous les joueurs sont morts, Jason à gagné !!");
        break
    }
    if (verifier_mort(victime1.prenom) == 'False') {
        //je vérifie que la vicitme n'est pas deja morte
       attaque(victime1);
       //la victime se fait attaquer
       if (mort.length == 0) {
        //je vérifie s'il y a des joueurs qui sont deja morts pour l'affichage
        console.log(victime1.prenom + ' a esquivé et a infligé '+ dmg);
       }
       else {
        console.log('Jason a tué ' + mort + ', ' + victime1.prenom + ' a esquivé et a infligé '+ dmg);
       }
       //j'affiche le bilan des actions
       //je fais ensuite de meme pour toutes les autres victimes
    }
    if (verifier_mort(victime2.prenom) == 'False') {
        attaque(victime2);
        if (mort.length == 0) {
         console.log(victime2.prenom + ' a esquivé et a infligé '+ dmg);
        }
        else {
         console.log('Jason a tué ' + mort + ', ' + victime2.prenom + ' a esquivé et a infligé '+ dmg);
        }
     }
     if (verifier_mort(victime3.prenom) == 'False') {
        attaque(victime3);
        if (mort.length == 0) {
         console.log(victime3.prenom + ' a esquivé et a infligé '+ dmg);
        }
        else {
         console.log('Jason a tué ' + mort + ', ' + victime3.prenom + ' a esquivé et a infligé '+ dmg);
        }
     }
     if (verifier_mort(victime4.prenom) == 'False') {
        attaque(victime1);
        if (mort.length == 0) {
         console.log(victime1.prenom + ' a esquivé et a infligé '+ dmg);
        }
        else {
         console.log('Jason a tué ' + mort + ', ' + victime1.prenom + ' a esquivé et a infligé '+ dmg);
        }
     }
}
if (Jason.pv <= 0) {
    //si jason est mort, j'affiche le message suivant
    console.log("Les survivants ont gagané mais RIP à " + mort);
}
