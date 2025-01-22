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
      [Choix.Pierre]: [Choix.Ciseaux],   // Pierre > Ciseaux
      [Choix.Feuille]: [Choix.Pierre],   // Feuille > Pierre
      [Choix.Ciseaux]: [Choix.Feuille], // Ciseaux > Feuille
    };
  
    // Vérif si joueur gagne
    if (gagnant[choixJoueur].includes(choixIA)) {
      return "Vous avez gagné";
    }
  
    // Sinon
    return "L'IA à gagné";
  }
  
  function choixAleatoire() {
    const choixArray = Object.values(Choix);
    const randomIndex = Math.floor(Math.random() * choixArray.length);
    return choixArray[randomIndex];
  }
  
  module.exports = { Choix, determinerGagnant, choixAleatoire };
  