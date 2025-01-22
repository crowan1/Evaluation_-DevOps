const { Choix, determinerGagnant, choixAleatoire } = require('../index');

describe('Tests de Pierre-Feuille-Ciseaux', () => {
  test('Pierre bat Ciseaux', () => {
    expect(determinerGagnant(Choix.Pierre, Choix.Ciseaux)).toBe('Le joueur gagne !');
  });

  test('Feuille bat Pierre', () => {
    expect(determinerGagnant(Choix.Feuille, Choix.Pierre)).toBe('Vous avez gagné !');
  });

  test('Ciseaux bat Feuille', () => {
    expect(determinerGagnant(Choix.Ciseaux, Choix.Feuille)).toBe('Vous avez gagné !');
  });

  test('Égalité lorsque les choix sont identiques', () => {
    expect(determinerGagnant(Choix.Pierre, Choix.Pierre)).toBe('Égalité !');
  });

  test('L\'IA génère un choix aléatoire valide', () => {
    const iaChoix = choixAleatoire();
    expect(Object.values(Choix)).toContain(iaChoix);
  });
});
