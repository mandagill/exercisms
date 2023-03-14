export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    const startingConstitution = DnDCharacter.generateAbilityScore();

    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = startingConstitution;
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = startingConstitution;
  }

  public static generateAbilityScore(): number {
    let diceRolls = [];
    for (let rollNumber = 0; rollNumber < 4; rollNumber++) {
      diceRolls.push(Math.floor(Math.random() * 6));
    }

    diceRolls.sort();
    const highestRolls = diceRolls.slice(1);
    const abilityScore = highestRolls.reduce((a, b) => a + b, 0);
    return abilityScore;
  }

  // how to make a default value? Like is there a difference between instance methods and class methods?
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
