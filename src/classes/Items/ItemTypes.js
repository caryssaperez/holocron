const { Item }  = require('./Item.js');

/**
 * @class Armor
 * @extends Item
 * Houses the armor properties. 
 */
class Armor extends Item {
    /**
     * @constructor 
     * @param {Object} properties 
     * @return Armor
     */
    constructor(properties) {
        super(properties);

        this.defense = properties.defense;
    };

    /**
     * @return {Object} - The properties of the Armor. 
     */
    getBaseProperties() {
        return {
            name: this.name,
            equippable: this.equippable,
            value: this.value,
            description: this.description,
            defense: this.defense
        }
    }
}

/**
 * @class Weapon
 * @extends Item
 * Houses the weapon properties and attack methods. 
 */
class Weapon extends Item {
    /**
     * @constructor
     * @param {Object} properties 
     * @return Weapon 
     */
    constructor(properties) {
        super(properties);

        this.damage = properties.damage;
    }

    /**
     * Wrapper for how much damage the attack makes.
     * @param {int} opposingScore 
     * @return {int} - The damage. 
     */
    getAttackDamage(opposingScore) {
        return (this.damage > opposingScore) ? this.damage - opposingScore : 0;
    }

    /**
     * @return {Object} - The properties of the Weapon.
     */
    getBaseProperties() {
        return {
            name: this.name,
            equippable: this.equippable,
            value: this.value,
            description: this.description,
            damage: this.damage
        }
    }
}

module.exports = { 
    Armor,
    Weapon
};