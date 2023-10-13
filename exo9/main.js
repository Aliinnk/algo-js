class Pokemon {
    constructor(nome, attack, defense, hp, luck) {
        this.nome = nome;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }
    isLucky() {
        let lucke = Math.random() * 100;
        if (lucke < this.luck) {
            console.log('attack');
        }
        else {
            console.log('dodo');
        }
    }

    attackPokemon(pokemon) {
        if (this.isLucky() == 'attack') {
            let damages = this.attack - pokemon.defense;
            pokemon.hp -= damages;
        }
        else {
            console.log('${this.name} a raté son attaque !');
        }
    }
}

while (poke1.hp > 0 || poke2.hp > 0) {
    attackPokemon(poke1);
    console.log(poke2.hp);
    if (poke2.hp == 0) {
        let mort = poke2.nome;
        break;
    }
    else {
        continue;
    }
    attackPokemon(poke2);
    if (poke1.hp == 0) {
        let mort = poke1.nome;
        break;
    }
    else {
        continue;
    }
}


console.log(mort + ' à perdu');
let poke1 = new Pokemon('moustache', 150, 200, 40, 90);
let poke2 = new Pokemon('Ramses',130, 210, 60, 70 );
