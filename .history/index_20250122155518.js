const Choix = {
    Pierre: 'Pierre',
    Feuille: 'Feuille',
    Ciseaux: 'Ciseaux',
    Lezard: 'Lezard',
    Spock: 'Spock',
  };
   
  function determinerGagnant(choixJoueur, choixIA) {
    if (choixJoueur === choixIA) {
      return "Égalité !";
    }
  
    const gagnant = {
      [Choix.Pierre]: [Choix.Ciseaux, Choix.Lezard],
      [Choix.Feuille]: [Choix.Pierre, Choix.Spock],
      [Choix.Ciseaux]: [Choix.Feuille, Choix.Lezard],
      [Choix.Lezard]: [Choix.Spock, Choix.Feuille],
      [Choix.Spock]: [Choix.Ciseaux, Choix.Pierre],
    };
  
    if (gagnant[choixJoueur].includes(choixIA)) {
      return "Le joueur gagne !";
    } else {
      return "L'IA gagne !";
    }
  }
   
  function choixAleatoire() {
    const choixArray = Object.values(Choix);
    const randomIndex = Math.floor(Math.random() * choixArray.length);
    return choixArray[randomIndex];
  }
  
  module.exports = { Choix, determinerGagnant, choixAleatoire };
  