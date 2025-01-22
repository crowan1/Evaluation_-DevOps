// tests/index.spec.js

const { Choix, determinerGagnant, choixAleatoire } = require('../index');

describe('Tests de Pierre-Feuille-Ciseaux amélioré', () => {
  test('Pierre bat Ciseaux', () => {
    expect(determinerGagnant(Choix.Pierre, Choix.Ciseaux)).toBe('Le joueur gagne !');
  });

  test('Feuille bat Pierre', () => {
    expect(determinerGagnant(Choix.Feuille, Choix.Pierre)).toBe('Le joueur gagne !');
  });

  test('Ciseaux bat Feuille', () => {
    expect(determinerGagnant(Choix.Ciseaux, Choix.Feuille)).toBe('Le joueur gagne !');
  });

  test('Pierre bat Lezard', () => {
    expect(determinerGagnant(Choix.Pierre, Choix.Lezard)).toBe('Le joueur gagne !');
  });

  test('Spock bat Ciseaux', () => {
    expect(determinerGagnant(Choix.Spock, Choix.Ciseaux)).toBe('Le joueur gagne !');
  });

  test('Égalité lorsque les choix sont identiques', () => {
    expect(determinerGagnant(Choix.Spock, Choix.Spock)).toBe('Égalité !');
  });

  test('L\'IA génère un choix aléatoire valide', () => {
    const iaChoix = choixAleatoire();
    expect(Object.values(Choix)).toContain(iaChoix);
  });
});
