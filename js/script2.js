const world = "forchettauuEEE"
console.warn(`Quante vocali contiene la parola ${world}?`);

console.log(world)

const vocali = ["a", "e", "i", "o", "u"]

// console.log(vocali[1].toUpperCase())

let contatore = 0;

for (let n = 0; n < vocali.length; n++) {
    for (let i = 0; i < world.length; i++) {
        if (world[i] === vocali[n] || world[i] === vocali[n].toUpperCase()) {
            contatore = contatore + 1;
        }
    }
}

console.log(`La parola ${world} è composta da ${contatore} vocali`)