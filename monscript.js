let tabWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

let tabMonths = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

let myDate1 = {
    dayname: tabWeek[0],
    daynum: 13,
    monthname: tabMonths[0],
    isWinter: true
}
//1) Faire la phrase en FR "Aujourd'hui nous sommes le lundi 13 janvier 2025" grâce à vos tableaux et à la biblio Date (voir la doc mdn)

console.log("Aujourd'hui nous sommes le " + myDate1.dayname + " " + myDate1.daynum + " " + myDate1.monthname + " 2025");

// 2) Faire la même chose mais sans vos tableaux et en anglais

DateOfToday = Date.now();

const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
const currentDate = new Date(DateOfToday).toLocaleDateString('en-US', options);

console.log("Today is " + currentDate);



// 3) Continuer mais cette fois traduire le texte en FR( voir la méthode toLocaleDateString

const currentDateFR = new Date(DateOfToday).toLocaleDateString('fr-FR', options);

console.log("Aujourd'hui nous sommes le " + currentDateFR);


