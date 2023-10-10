let names = []
names.push("Vincent", "Paul", "Arthur")
let i = 0

names.forEach(element => {
    names[i] += " va à la pêche"
    i++
});

console.log(names)

/*
names.forEacb(names => {
    name += " va à la pêche";
    console.log(name);
});
*/