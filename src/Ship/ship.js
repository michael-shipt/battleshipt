export default class Ship {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
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