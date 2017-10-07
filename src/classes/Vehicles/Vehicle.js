class Vehicle {
    constructor(properties) {
        this.name = properties.name;
        this.occupancy = properties.occupancy;
        this.description = properties.description;
        this.value = properties.value;
        this.travelDistance = properties.travelDistance; 
        this.defense = properties.defense; 
        this.warpDrive = properties.warpDrive;
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
            value: this.value,
            description: this.description,
            damage: this.damage,
            weapons: this.weapons,
            shields: this.shields,
            defense: this.defense,
            travelDistance: this.travelDistance,
            warpDrive: this.warpDrive
        }
    }
}