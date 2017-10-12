class Armor extends Item {
    constructor(properties) {
        super(properties);

        this.defense = properties.defense;
    };

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