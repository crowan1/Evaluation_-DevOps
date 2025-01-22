const Choix = {
    Pierre: 'Pierre',
    Feuille: 'Feuille',
    Ciseaux: 'Ciseaux',
  };
  
  function determinerGagnant(choixJoueur, choixIA) {
    if (choixJoueur === choixIA) {
      return "Égalité !";
    }
  
    const gagnant = {
      [Choix.Pierre]: [Choix.Ciseaux],   // Pierre bat Ciseaux
      [Choix.Feuille]: [Choix.Pierre],   // Feuille bat Pierre
      [Choix.Ciseaux]: [Choix.Feuille], // Ciseaux bat Feuille
    };
  
    // Vérifie si le choix du joueur bat celui de l'IA
    if (gagnant[choixJoueur].includes(choixIA)) {
      return "Le joueur gagne !";
    }
  
    // Sinon
    return "L'IA gagne !";
  }
  
  function choixAleatoire() {
    const choixArray = Object.values(Choix);
    const randomIndex = Math.floor(Math.random() * choixArray.length);
    return choixArray[randomIndex];
  }
  
  module.exports = { Choix, determinerGagnant, choixAleatoire };
  