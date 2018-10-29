export default class View {
    constructor() {
        this.app = document.getElementById('app')
    }

    drawBoard(board) {
        if (!this.boardExists(board.name)) {
            this.app.innerHTML += `<div class="board" id="${board.name}"></div>`
        }

        const tiles = board.tiles.map(row => {
            return row.map(tile => {
                const className = typeof tile === 'object' ? 'tile--ship' : ''
                return `<div class="tile ${className}"></div>`
            }).join('')
        }).join('')
        
        document.getElementById(board.name).innerHTML = tiles
    }

    boardExists(boardId) {
        return document.getElementById(boardId) !== null ? true : false
    }

    setActiveBoard(boardIndex) {
        const boards = document.querySelectorAll('.board')

        boards.forEach(e => {
            e.classList.remove('board--active')
        })

        boards[boardIndex].classList.add('board--active')
    }

    setTileStatus(status, tile) {
        switch (status) {
            case 'hit':
            case 'sunk':
            case 'gameover':
                tile.classList.add('tile--hit')
                break;
            
            case 'miss':
                tile.classList.add('tile--miss')
                break;
            
            case 'ship':
                tile.classList.add('tile--ship')
                break;
        
            default:
                break;
        }
    }
}