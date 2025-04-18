const world = "aIUoLa"
console.warn(`Quante vocali contiene la parola ${world}?`);

console.log(world)

const vocali = ["A", "E", "I", "O", "U"]

// console.log(vocali[1].toUpperCase())

let contatore = 0;

//CON 2 CICLIFOR

// for (let n = 0; n < vocali.length; n++) {
//     for (let i = 0; i < world.length; i++) {
//         if (world[i] === vocali[n] || world[i] === vocali[n].toUpperCase()) {
//             contatore = contatore + 1;
//         }
//     }
// }

// console.log(`La parola ${world} è composta da ${contatore} vocali`)

for (let n = 0; n < world.length; n++) {

            if (vocali.includes(world[n].toUpperCase())) {
                contatore = contatore + 1;
            }

    }
    
    console.log(`La parola ${world} è composta da ${contatore} vocali`)