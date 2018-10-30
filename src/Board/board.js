import { Ship } from '../Ship'

const ORIENTATION = {
    horizontal: 0,
    vertical: 1
}

/**
 * Board class represents a player's board: a grid of n tiles.
 * 
 * @access public
 * @since 1.0.0
 */
export default class Board {
    /**
     * Constructs a new Board object
     * 
     * @param {number} width the width of the board
     * @param {number} height the height of the board
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
     * Places a Ship object on the Board
     * 
     * @param {Ship} ship a Ship object to be placed on the board
     * @param {number} orientation 0 for horizontal or 1 for vertical
     * @param {number} x the x coordinate of the piece
     * @param {number} y the y coordinate of the piece
     */
    placeShip(ship, orientation, x, y) {
        x = x - 1
        y = y - 1
        if (ship === null) {
            return null
        }

        if (orientation === ORIENTATION.horizontal) {
            for (let i = 0; i < ship.hp; i++) {
                this.tiles[y][x + i] = ship
            }
        } else if (orientation === ORIENTATION.vertical) {
            for (let i = 0; i < ship.hp; i++) {
                this.tiles[y + i][x] = ship
            }
        }

        return // TODO: array of ship tiles?
    }

    /**
     * Checks the current status of a tile on the Board
     * 
     * @param {number} x x coordinate of tile to check
     * @param {number} y y coordinate of tile to check
     */
    checkTile(x, y) {
        return this.tiles[y - 1][x - 1]
    }

    setTile(status, x, y) {
        this.tiles[y-1][x-1] = status
    }

    areAllShipsSunk() {
        return this.ships.every(ship => ship.sunk)
    }
}