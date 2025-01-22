const { Choix, determinerGagnant, choixAleatoire } = require('../index');

describe('Tests du jeu Pierre-Feuille-Ciseaux', () => {
  
  test('Quand je choisis Pierre et l\'IA choisit Ciseaux', () => {
    expect(determinerGagnant(Choix.Pierre, Choix.Ciseaux)).toBe('Vous avez gagné');
  });

  test('Quand je choisis Feuille et l\'IA choisit Pierre', () => {
    expect(determinerGagnant(Choix.Feuille, Choix.Pierre)).toBe('Vous avez gagné');
  });

  test('Quand je choisis Ciseaux et l\'IA choisit Feuille, je gagne', () => {
    expect(determinerGagnant(Choix.Ciseaux, Choix.Feuille)).toBe('Vous avez gagné');
  });

  test('Si on choisit la même chose, c\'est une égalité', () => {
    expect(determinerGagnant(Choix.Pierre, Choix.Pierre)).toBe('Égalité !');
  });

  test('L\'IA choisit bien quelque chose au hasard parmi Pierre, Feuille ou Ciseaux', () => {
    const iaChoix = choixAleatoire();
    expect(Object.values(Choix)).toContain(iaChoix);
  });

});
