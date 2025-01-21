function classic(age, gender) {
    if (age < 18 && gender === "homme") {
        return "Bonjour jeune homme !";
    }
    if (age < 18 && gender === "femme") {
        return "Bonjour jeune femme !";
    }
    if (age >= 18 && gender === "homme") {
        return "Bonjour monsieur !";
    }
    if (age >= 18 && gender === "femme") {
        return "Bonjour madame !";
    } else {
        return "Bonjour !";
    }
}

console.log(classic(16, "homme"));

const classiquefleche = (age, gender) => {
    return `Bonjour ${
        age < 18
            ? `jeune ${
                gender === "homme"
                    ? "homme"
                    : "femme"
            }`
            : gender === "homme"
                ? "monsieur"
                : "madame"
    } !`;
};

console.log(classiquefleche(16, "homme"));
