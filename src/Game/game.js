import { Player } from '../Player'
import { STATUS_CODE } from '../helpers'

/**
 * Represents the Game logic
 */
export default class Game {
    /**
     * 
     * @param {View} view View instance
     * @param {number} numberOfPlayers number of players in the game
     * @param {array} shipList a list of arrays containing [0] ship name and [1] ship hp
     */
    constructor(view, numberOfPlayers, shipList) {
        this.view = view
        this.shipList = shipList
        this.players = this.createPlayers(numberOfPlayers)
        
        this.currentPlayer = 0
        this.lastPlayer = numberOfPlayers - 1
        this.over = false
        
        this.start()
    }

    /**
     * Create n number of Player instances
     * 
     * @param {number} numberOfPlayers Number of players to create
     * 
     * @returns {array} list of Player instances
     */
    createPlayers(numberOfPlayers) {
        let players = []

        for (let i = 0; i < numberOfPlayers; i++) {
            const player = new Player(this.shipList)
            players.push(player)
        }

        return players
    }

    /**
     * Start the game by drawing boards and creating ships for each player, then begin the gameloop
     */
    start() {
        this.players.forEach(player => {
            
            const { board } = player

            this.view.drawBoard(board)
            board.createShips(this.shipList)
        })

        this.placeShips(this.gameLoop.bind(this))
    }

    /**
     * Loops through all players and their ships for placement on the board
     * 
     * @param {function} callback called once all ships have been placed
     */
    placeShips(callback) {
        let shipCounter = 0,
            playerCounter = 0

        this.view.setActiveBoard(playerCounter)
    
        document.addEventListener('attack', event => {
            const {board, x, y} = event.detail,
                  activePlayer = this.players[playerCounter]

            if (board !== playerCounter) { return }

            activePlayer.board.placeShip(activePlayer.board.ships[shipCounter], 0, x, y)
            shipCounter = (shipCounter + 1) % this.shipList.length
            
            if (shipCounter === 0) {
                playerCounter = playerCounter + 1
            }

            this.view.updateBoard(activePlayer.board)
            
            if (playerCounter !== this.players.length) {
                this.view.setActiveBoard(playerCounter)
            } else {
                callback()
            }
        })
    }

    /**
     * A loop of the game; one players' turn
     */
    gameLoop() {
        this.view.setActiveBoard(this.lastPlayer)

        const activePlayer = this.players[this.currentPlayer],
              lastPlayer = this.players[this.lastPlayer]

        const turn = attackHandler.bind(this)

        if(!this.over) {
            // Listen for an 'attack'
            document.addEventListener('attack', turn, false)
        }

        function attackHandler(event) {
            // Remove the event listener until the next loop so we avoid double firing
            document.removeEventListener('attack', turn, false)
    
            const {board, x, y, target} = event.detail
            
            // Ignore it if it came from current player's board
            if (board !== this.lastPlayer) { 
                alert('wrong board')
                this.gameLoop()
                return
            }

            // Get the coordinates of the click and attack that location
            const status = activePlayer.attack(lastPlayer, x, y)

            this.view.setTileClass(status, target)

            if (status === STATUS_CODE.gameover) {
                // The game is over
                this.gameOver()
            }

            if (status !== STATUS_CODE.taken) {
                // Advance to next player
                this.advancePlayer()
            }

            // Recursion
            this.gameLoop()
        }
    }

    /**
     * Advance to the next player in the list
     */
    advancePlayer() {
        this.lastPlayer = this.currentPlayer
        
        if (this.currentPlayer < this.players.length - 1) {
            this.currentPlayer++
        } else {
            this.currentPlayer = 0
        }

        console.log(`Player ${this.currentPlayer}'s turn!`)
    }

    /**
     * Called when the game is over.
     */
    gameOver() {
        alert('Game over!')
    }
}