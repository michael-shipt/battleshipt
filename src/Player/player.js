import { Board } from '../Board'
import { STATUS_CODE } from '../helpers'

/**
 * Player classes represents a player of the game
 * 
 * @access public
 */
export default class Player {
    /**
     * Constructs a new Player instance
     * 
     * @param {array} shipList a list of arrays containing [0] ship name and [1] ship hp
     */
    constructor(shipList) {
        this.board = new Board(10, 10, shipList)
    }

    /**
     * Check a player's board at coordinates x, y, hits if possible, and returns a status code
     * 
     * @param {Player} player instance of Player to attack
     * @param {number} x x coordinate to attack on Player's board
     * @param {number} y y coordinate to attack on Player's board
     * 
     * @returns {number} status code of attack: 0 = miss, 1 = hit, 2 = taken, 3 = ship sunk
     */
    attack(player, x, y) {
        const   opponentBoard = player.board,
                tileStatus = opponentBoard.checkTile(x, y),
                ship = tileStatus // double variable for readability
        
        switch (tileStatus) {

            case STATUS_CODE.miss:
                opponentBoard.setTile(1, x, y)
                console.log('Miss!')
                return STATUS_CODE.miss

            case STATUS_CODE.taken:
                console.log('Already taken!')
                return STATUS_CODE.taken

            default:
                ship.hit()
                opponentBoard.setTile(1, x, y)

                if (!ship.sunk) {
                    console.log('Hit!')
                    return STATUS_CODE.hit
                }
                
                if (opponentBoard.areAllShipsSunk()) {
                    console.log('Game over, man. Game OVER!!')
                    return STATUS_CODE.gameover
                }

                console.log('Sunk!')
                return STATUS_CODE.sunk
        }
    }
}
