import { Game } from "../Game";

export default class Controller {
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
    }

    clickHandler() {
        const tiles = document.querySelectorAll('div.tile')

        tiles.forEach(e => {
            e.addEventListener('click', e => {
                const board = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement)
                const tile = [...e.target.parentElement.children].indexOf(e.target)+1

                const y = Math.ceil(tile / 10)
                const x = tile - ((y-1)*10)
                
                const attackEvent = new CustomEvent('attack', { detail: { target: e.target, board, x, y } })
                document.dispatchEvent(attackEvent)
            })
        })
    }
}