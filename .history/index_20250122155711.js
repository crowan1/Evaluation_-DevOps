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
  
    // Vérifiez si le joueur a gagné
    if (gagnant[choixJoueur].includes(choixIA)) {
      return "Le joueur gagne !";
    }
    
    // Si le joueur n'a pas gagné, l'IA gagne
    return "L'IA gagne !";
  }
  
   
  function choixAleatoire() {
    const choixArray = Object.values(Choix);
    const randomIndex = Math.floor(Math.random() * choixArray.length);
    return choixArray[randomIndex];
  }
  
  module.exports = { Choix, determinerGagnant, choixAleatoire };
  