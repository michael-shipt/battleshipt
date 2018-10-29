export default class Ship {
    constructor(name, length) {
        this.name = name
        this.length = length
        this.hp = length
        this.sunk = false
    }

    hit() {
        if (!this.sunk) {
            this.hp--
        }

        if (this.hp == 0) {
            this.sunk = true
        }
    }
}