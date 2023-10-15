let songs = ['Anissa - Wejdene', 'Where Is My Mind ? - Unlike Pluto',
'Twenty Seven - Layto', 'Stars - OVERWERK', 'Scream - Jake Daniels']

let santé_mentale = 10
let changements = 0
//création de la liste de morceaux joués et des variables santé_mentale et changements de taxi
for (let feux_rouges = 0; feux_rouges <= 30; feux_rouges++) {
    const random = Math.floor(Math.random() * songs.length);
    //création du variable random qui va me servir à choisir aléatoirement une musique parmis la liste "songs"
    if (santé_mentale == 0) {
        console.log("explosion booom, il restaient " + feux_rouges + " feux rouges")
        break
    //je vérifie si la santé mentale n'est pas à 0, si oui, c'est la fin de la partie
    }
    if (songs[random] == 'Anissa - Wejdene') {
        santé_mentale -= 1;
        changements += 1;
        let restant = 30 - feux_rouges
        console.log(`${santé_mentale} de santé mentale restante, il reste ${restant} et et malheureusement la musiques jouée est Anissa - Wejdene`)
        // (console.log(santé_mentale + " de santé mentale restante, " +  "\n il reste " + 30 - feux_rouges + " et malheureusement la musiques jouée est " + songs[random]);)
        //je vérifie si la musique jouée est celle de Wejdene, si oui, nous perdons 1pts de santé mentale et changeons de taxi
    }
    else {
        let restant = 30 - feux_rouges
        console.log(`musique actuellement jouée :  ${songs[random]} , btw il vous reste ${restant}  feux rouges`);
        //le personnage continue sa route, j'affiche les feux rouges restants et la musique passant à la radio
    }

    if (feux_rouges == 30) {
        console.log("BRAVO VOUS ETES ARRIVES !! il vous a fallu " + changements + " changements de taxi")
        //je vérifie si le trajet est fini (au bout de 30 feux rouges), si oui, j'affiche le message de fin
    }
}
