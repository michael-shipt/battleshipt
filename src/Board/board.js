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
     * @param {number} x the width of the board
     * @param {number} y the height of the board
     */
    constructor(x, y) {
        this.x = x
        this.y = y
        this.tiles = this.createBoard(x, y)
    }

    /**
     * Creates a new board a 2d array (length x) of arrays (length y)
     * 
     * @param {number} x the width of the board
     * @param {number} y the height of the board
     * 
     * @returns {number[]} a 2d array
     */
    createBoard(x, y) {
        let board = []

        for (let i = 1; i <= y; i++) {
            board.push(new Array(x).fill(0))
        }

        return board
    }

    /**
     * Places a Ship object on the Board
     * 
     * @param {Ship} ship a Ship object to be placed on the board
     * @param {string} orientation One of 'horizontal' or 'vertical'
     * @param {number} x the x coordinate of the piece
     * @param {number} y the y coordinate of the piece
     */
    placeShip(ship, orientation, x, y) {
        x = x - 1
        y = y - 1

        if (!ship.length || !orientation.length) {
            return null
        }

        if (orientation === 'horizontal') {
            for (let i = 0; i < ship.length; i++) {
                this.tiles[y][x + i] = ship
            }
        } else if (orientation === 'vertical') {
            for (let i = 0; i < ship.length; i++) {
                this.tiles[y + i][x] = ship
            }
        }
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
}