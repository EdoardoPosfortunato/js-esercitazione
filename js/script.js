console.warn("Vettore di numeri random")

const vettore = [];

for (let i = 0; i < 10; i++) {
    
    let numRandomico = Math.floor(Math.random() * 100 + 1);
    console.log(numRandomico);

    if (numRandomico % 2 === 0){
        vettore.push(numRandomico);
    }
}

console.log(vettore);


console.warn("Media dei numeri da 1 a 10")

let somma = 0;

for (let i = 1; i <= 10; i++) {
    
    somma = somma + i;

}

console.log(`La somma è ${somma}`)
console.log(`La media è ${somma / 10}`)

