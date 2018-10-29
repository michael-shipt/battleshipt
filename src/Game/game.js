import { Player } from '../Player'

export default class Game {
    constructor(view, numberOfPlayers, shipList) {
        this.view = view
        this.shipList = shipList
        this.players = this.createPlayers(numberOfPlayers)//.bind(this)
        
        this.currentPlayer = 0
        this.lastPlayer = numberOfPlayers - 1
        this.over = false
        
        this.turn = () => this.turn
        this.start()
    }

    createPlayers(numberOfPlayers) {
        let players = []

        for (let i = 0; i < numberOfPlayers; i++) {
            const player = new Player(this.shipList)
            players.push(player)
        }

        return players
    }

    start() {
        this.players.forEach(player => {
            this.view.drawBoard(player.board)
            player.board.createShips(this.shipList)
            player.board.ships.forEach((ship, i) => {
                player.board.placeShip(ship, 'horizontal', 2, 1+i)
                this.view.drawBoard(player.board)
            })
        })

        this.gameLoop()
    }

    gameLoop() {
        this.view.setActiveBoard(this.lastPlayer)

        const activePlayer = this.players[this.currentPlayer],
            lastPlayer = this.players[this.lastPlayer]

        const turn = turnHandler.bind(this)

        if(!this.over) {
            // listen for a click
            document.addEventListener('attack', turn, false)
        }

        // refactor
        function turnHandler(e) {
            document.removeEventListener('attack', turn, false)
    
            const board = e.detail.board,
                x = e.detail.x,
                y = e.detail.y
            
            // // ignore it if it came from current player's board
            if (board !== this.lastPlayer) { 
                alert('wrong board')
                this.gameLoop()
                return
            }

            // get the coordinates of the click
            // attack that location
            const status = activePlayer.attack(lastPlayer, x, y)

            this.view.setTileStatus(status, e.detail.target)

            if (status === 'gameover') {
                this.gameOver()
            }

            if (status !== 'taken') {
                // // advance to next player
                this.advancePlayer()
            }

            this.gameLoop()
        }
    }

    advancePlayer() {
        this.lastPlayer = this.currentPlayer
        
        if (this.currentPlayer < this.players.length - 1) {
            this.currentPlayer++
        } else {
            this.currentPlayer = 0
        }

        console.log(`Player ${this.currentPlayer}'s turn!`)
    }

    gameOver() {
        alert('Game over!')
    }
}