import { Ship } from '../Ship'
import { Board } from '../Board'

export default class Player {
    constructor(shipList) {
        this.board = new Board(10, 10, shipList)
    }

    attack(player, x, y) {
        const   opponentBoard = player.board,
                tileStatus = opponentBoard.checkTile(x, y)
        
        // refactor
        switch (tileStatus) {

            case 0:
                opponentBoard.setTile(1, x, y)
                console.log('Miss!')
                return 'miss'

            case 1:
                console.log('Already taken!')
                return 'taken'

            default:
                tileStatus.hit()
                opponentBoard.setTile(1, x, y)

                if (!tileStatus.sunk) {
                    console.log('Hit!')
                    return 'hit'
                } else {
                    if (opponentBoard.areAllShipsSunk()) {
                        console.log('Game over, man. Game OVER!!')
                        return 'gameover'
                    }

                    console.log('Sunk!')
                    return 'sunk'

                }
        }
    }
}