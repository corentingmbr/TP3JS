let nomJour = "Lundi",
    numJour = 13,
    nomMois = "Janvier",
    isHiver = true;
//ça fonctionne
console.log(`Nous sommes le ${nomJour} ${numJour} ${nomMois} 2025 et c'est la saison ${isHiver ? 'hivernale' : 'éstivale'}`)


let tabWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

let tabMonths = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

let myDate1 = {
    dayname: tabWeek[0],
    daynum: 13,
    monthname: tabMonths[0],
    isWinter: true
}

console.log(`Nous sommes le ${myDate1.dayname} ${myDate1.daynum} ${myDate1.monthname} 2025 et c'est la saison ${myDate1.isWinter ? 'hivernale' : 'éstivale'}`)

let MyDateV2 = {};
MyDateV2.dayname2 = tabWeek[0];
MyDateV2.daynum2 = 13;
MyDateV2.monthname2 = tabMonths[0];
MyDateV2.isWinter2 = true;

console.log(`Nous sommes le ${MyDateV2.dayname2} ${MyDateV2.daynum2} ${MyDateV2.monthname2} 2025 et c'est la saison ${MyDateV2.isWinter2 ? 'hivernale' : 'éstivale'}`)