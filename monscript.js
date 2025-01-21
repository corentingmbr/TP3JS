let age;

age = prompt('What is your age?');

if (age === 18) {
    console.log(`The user has ${age} years old, he just got his majority !`);
} else if (age === 25) {
    console.log(`The user has ${age} years old, he has a quarter of a century !`);
} else if (age === 50) {
    console.log(`The user has ${age} years old, he is half a century !`);
} else if (age === 62) {
    console.log(`The user has ${age} years old, he just got retired !`);
} else if (age === 100) {
    console.log(`The user has ${age} years old, he just became a centenarian !`);
}

// méthode switch.

switch (age) {
    case 18:
        console.log(`The user has ${age} years old, he just got his majority !`);
        break;
    case 25:
        console.log(`The user has ${age} years old, he has a quarter of a century !`);
        break;
    case 50:
        console.log(`The user has ${age} years old, he is half a century !`);
        break;
    case 62:
        console.log(`The user has ${age} years old, he just got retired !`);
        break;
    case 100:
        console.log(`The user has ${age} years old, he just became a centenarian !`);
        break;
    default:
        console.log(`The user has ${age} years old`);
        break;
}





