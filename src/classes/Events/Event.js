/**
 * @class Event
 * Houses the story line, locations, opponents, and items to create a random event.
 */
class Event {
    /**
     * @constructor
     * @param {string} story - A brief explanation of the event. 
     * @param {Location[]} location - An array of Location objects.
     * @param {Opponent[]} opponents - Array of Opponent objects.
     * @param {Item[]} items - Array of Item objects. 
     * @return Event
     */
    constructor(story, location, opponents, items) {
        this.location = location;
        this.opponents = opponents;
        this.items = items;
    }
}

module.exports = { Event }; 