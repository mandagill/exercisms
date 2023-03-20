export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = DnDCharacter.getModifierFor(this.constitution) + 10;
  }

  public static generateAbilityScore(): number {
    let diceRolls = [];
    for (let rollNumber = 0; rollNumber < 4; rollNumber++) {
      diceRolls.push(this.rollD6());
    }

    diceRolls.sort();
    const highestRolls = diceRolls.slice(1);
    const abilityScore = highestRolls.reduce((a, b) => a + b, 0);
    return abilityScore;
  }

  // how to make a default value? Like is there a difference between instance methods and class methods?
  public static getModifierFor(abilityValue: number): number {
    // todo
    return Math.floor((abilityValue - 10) / 2);
  }

  static rollD6() {
    return Math.floor(Math.random() * 6 + 1);
  }
}
