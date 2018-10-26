export default class View {
    constructor() {
        this.app = document.getElementById('app')
    }

    drawBoard(board) {
        const tiles = board.tiles.map(e => {
            return e.map(() => {
                return `<div class="tile"></div>`
            }).join('')
        }).join('')
        this.app.innerHTML += `<div class="board">${tiles}</div>`
    }
}