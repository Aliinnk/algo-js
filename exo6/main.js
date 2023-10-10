let a = "Jean";
let b = "Paul";
let result = null 

function checkName(nom1, nom2) {
    if (nom1 == nom2) {
        result = 'True';
    }
    else {
        result = 'False';
    }
    console.log(result)
}

checkName(a, b)

/*
function checkName(name1, name2) {
    return name1 == name2;
}

let result = checkName(a, b);
console.log(result)

ajout et enlever elem dun tab

let prenoms = ["ali", "eh", "oh"]
prenoms.push("moustache") ajout stachmou
prenoms.splice(0,1) enlever ali
prenoms.splice(0,0,"moumou")
prenoms.forEach( function(prenoms)){
    console.log(prenomss)
}
*/

