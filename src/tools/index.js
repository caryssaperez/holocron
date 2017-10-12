const { Weapon, Armor } = require('../classes/Items/ItemTypes.js');

let weaponProps = {
    name: 'Lightsaber',
    description: 'The coolest weapon',
    value: 1000,
    equippable: true,
    damage: 25
};
const weapon = new Weapon(weaponProps);

let armorProps = {
    name: 'Battle Armor',
    description: '',
    value: 50,
    equippable: true,
    defense: 10
}

const armor = new Armor(armorProps);

// Commence battle.
let damage = weapon.getAttackDamage(armor.defense);

console.log(`You did ${damage} points of damage!`);