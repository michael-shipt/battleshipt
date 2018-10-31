import { Ship } from '../Ship'

// Orientation enum
const ORIENTATION = {
    horizontal: 0,
    vertical: 1
}

/**
 * Board class represents a player's board: a grid of n tiles.
 * 
 * @access public
 */
export default class Board {
    /**
     * Constructs a new Board instance
     * 
     * @param {number} width the width of the board
     * @param {number} height the height of the board
     * @param {array} shipList a list of arrays containing [0] ship name and [1] ship hp
     */
    constructor(width, height, shipList) {
        this.name = `board_${Math.floor(1000 + Math.random() * 9000)}`
        this.width = width
        this.height = height
        this.tiles = this.createBoard(width, height)
        this.ships = this.createShips(shipList)
    }

    /**
     * Creates a new board a 2d array (length x) of arrays (length y)
     * 
     * @param {number} width the width of the board
     * @param {number} height the height of the board
     * 
     * @returns {number[]} a 2d array
     */
    createBoard(width, height) {
        let board = []

        for (let i = 1; i <= height; i++) {
            board.push(new Array(width).fill(0))
        }

        return board
    }

    /**
     * Creates an array of Ship instances
     * 
     * @param {array} shipList a list of arrays containing [0] ship name and [1] ship hp
     * 
     * @returns {array} Array of Ship instances
     */
    createShips(shipList) {
        let ships = []

        shipList.forEach(ship => {
            const shipName = ship[0],
                shipLength = ship[1]

            ships.push(new Ship(shipName, shipLength))
        })

        return ships
    }

    /**
     * Places a Ship instance on the Board
     * 
     * @param {Ship} ship a Ship instance to be placed on the board
     * @param {number} orientation 0 for horizontal or 1 for vertical
     * @param {number} x the x coordinate of the piece
     * @param {number} y the y coordinate of the piece
     * 
     * @return {boolean} was the ship succesfully placed on the board?
     */
    placeShip(ship, orientation, x, y) {
        x = x - 1
        y = y - 1

        if (ship === null) {
            return false
        }

        if (orientation === ORIENTATION.horizontal) {
            // Ensure that the ship doesn't overflow the board horizontally
            if (x + ship.hp <= this.width) {
                for (let i = 0; i < ship.hp; i++) {
                    this.tiles[y][x + i] = ship
                }
            } else {
                return false
            }
        } else if (orientation === ORIENTATION.vertical) {
            // Ensure that the ship doesn't overflow the board vertically
            if (y + ship.hp <= this.height) {
                for (let i = 0; i < ship.hp; i++) {
                    this.tiles[y + i][x] = ship
                }
            } else {
                return false
            }
        }

        return true
    }

    /**
     * Checks the current status of a tile on the Board
     * 
     * @param {number} x x coordinate of tile to check
     * @param {number} y y coordinate of tile to check
     * 
     * @return {boolean} the value of the tile at x, y
     */
    checkTile(x, y) {
        return this.tiles[y - 1][x - 1]
    }

    /**
     * Sets the status of a specified tile on the board
     * 
     * @param {number} status status of the tile, 0 for unattacked, 1 for attacked
     * @param {number} x x coordinate of the tile to set
     * @param {number} y y coordinate of the tile to set
     */
    setTile(status, x, y) {
        this.tiles[y-1][x-1] = status
    }

    /**
     * Checks to see if all ships on the board are sunk
     * 
     * @returns {bool} Are all the ships on the board sunk?
     */
    areAllShipsSunk() {
        return this.ships.every(ship => ship.sunk)
    }
}
