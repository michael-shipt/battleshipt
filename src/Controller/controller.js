import { Game } from "../Game";

/**
 * Represents the Controller
 */
export default class Controller {
    /**
     * Constructs a new controller
     * 
     * @param {View} view View instance of the game
     */
    constructor(view) {
        this.view = view
        this.game = new Game(view, 2, [
            ['carrier', 5],
            ['battleship', 4],
            ['cruiser', 3],
            ['submarine', 3],
            ['destroyer', 2],
        ])

        this.clickHandler()
        this.mouseMoveHandler()
    }

    mouseMoveHandler() {
        document.addEventListener('mousemove', event => {
            const mouseFollow = document.querySelector('.mouseFollow')

            if (mouseFollow !== null) {
                mouseFollow.style.top = event.pageY + 'px'
                mouseFollow.style.left = event.pageX + 'px'
            }
        })
    }

    /**
     * Listens for any click on a tile and fires an attack event
     */
    clickHandler() {
        const tiles = document.querySelectorAll('div.tile')

        tiles.forEach(tile => {
            tile.addEventListener('click', event => {
                const board = [...event.target.parentElement.parentElement.children].indexOf(event.target.parentElement)
                const tile = [...event.target.parentElement.children].indexOf(event.target)+1

                const y = Math.ceil(tile / 10)
                const x = tile - ((y-1)*10)
                
                const attackEvent = new CustomEvent('attack', { detail: { target: event.target, board, x, y } })
                document.dispatchEvent(attackEvent)
            })
        })
    }
}