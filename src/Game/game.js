import { Player } from '../Player'
import { Board } from '../Board'

export default class Game {
    constructor(view, numberOfPlayers, ships) {
        this.view = view
        
        this.players = this.createPlayers(numberOfPlayers)
        this.ships = ships
        this.currentPlayer = 1

        this.start()
    }

    createPlayers(numberOfPlayers) {
        let players = []

        for (let i = 0; i < numberOfPlayers; i++) {
            const board = new Board(10,10)
            const player = new Player(board)
            players.push(player)
        }

        return players
    }

    start() {
        this.players.forEach(player => {
            this.view.drawBoard(player.board)
            player.createShips(this.ships)
        })
    }

    newTurn() {
        const activePlayer = this.players[this.currentPlayer],
            lastPlayer = this.players[this.currentPlayer - 1]

        activePlayer.attack(lastPlayer, x, y)

        ++this.currentPlayer
    }

    gameOver() {

    }
}