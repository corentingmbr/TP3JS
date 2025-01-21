let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myarray.slice(0, 8));

for (let i = 0; i < 8; i++) {
    console.log(myarray[i]);
}
console.log(" affichage avec length : ")
for (length in myarray) {
    console.log(myarray[length]);
}