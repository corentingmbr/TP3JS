let i = 1;
console.log("Début de la boucle 1 :");
while (i < 100) {
    i += i
    console.log(i)
}

console.log("Début de la boucle 2 :");

let number;
do {
    number = parseInt(prompt("Entrez un nombre entre 1 et 100 :"), 10);
} while (isNaN(number) || number < 1 || number > 100);

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log(`La somme des ${number} premiers nombres est : ${sum}`);