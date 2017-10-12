class Weapon extends Item {
    constructor(properties) {
        super(properties);

        this.damage = properties.damage;
    }

    hit(opposingScore) {
        return this.damage > opposingScore; 
    }

    getAttackDamage(opposingScore) {
        return hit(opposingScore) ? this.damage : 0;
    }

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