/**
 * @class Item
 * Houses the item details and properties.
 */

class Item {
    /**
     * @constructor
     * @param {Object} properties 
     * @return Item
     */
    constructor(properties) {
        this.name = properties.name;
        this.equippable = properties.equippable; 
        this.value = properties.value; 
        this.description = properties.description;
    }
}

module.exports = { Item }; 