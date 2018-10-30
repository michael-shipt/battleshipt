/**
 * Ship class represents a ship game piece
 * 
 * @access public
 */
export default class Ship {
    /**
     * Constucts a new Ship instance
     * 
     * @param {string} name name of the ship
     * @param {number} hp healthpoints, ans subsequently the size, of the ship
     */
    constructor(name, hp) {
        this.name = name
        this.hp = hp
        this.sunk = false
    }

    /**
     * "Hits" the ship, decreasing the HP, and setting its status to sunk if the hp reaches 0
     */
    hit() {
        if (!this.sunk) {
            this.hp--
        }

        if (this.hp == 0) {
            this.sunk = true
        }
    }
}