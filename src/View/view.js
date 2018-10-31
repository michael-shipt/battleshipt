import { STATUS_CODE } from '../helpers'

/**
 * View class interacts with DOM
 * 
 * @access public
 */
export default class View {
    /**
     * Constructs a View instance
     */
    constructor() {
        this.app = document.getElementById('app')
    }

    /**
     * Renders a Board to the DOM
     * 
     * @param {Board} board Board to render in the DOM
     */
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

    /**
     * Scans an instance of Board and updates its representation in the DOM
     * 
     * @param {Board} board instance of Board to reference
     */
    updateBoard(board) {
        const boardNode = document.getElementById(board.name),
              tileNodes = boardNode.childNodes

        board.tiles.forEach((row, ri) => {
            row.forEach((tile, ti) => {
                if (typeof tile === 'object') {
                    tileNodes[(ri*10)+ti].classList.add('tile--ship')
                }
            })
        })
    }

    /**
     * Creates a ship piece to follow mouse movement
     * 
     * @param {number} length number of tiles in the piece
     * @param {number} orientation rotation of the piece, 0 = horizontal, 1 = vertical
     */
    createMouseFollow(length, orientation) {
        this.removeMouseFollow()

        const followPiece = document.createElement('div')
        followPiece.classList.add('mouseFollow')

        const orientationClass = orientation === 0 ? 'horizontal' : 'vertical'

        followPiece.classList.add('mouseFollow')
        followPiece.classList.add(orientationClass)

        document.body.append(followPiece)

        for (let i = 0; i < length; i++) {
            const tile = document.createElement('div')
            tile.classList.add('tile')
            tile.classList.add('tile--ship')
            document.querySelector('.mouseFollow').appendChild(tile)
        }
    }

    /**
     * Tracks the position of the mouse and matches the location of a .mouseFollow element to it
     */
    moveMouseFollow() {
        const mouseFollow = document.querySelector('.mouseFollow')

        if (mouseFollow !== null) {
            mouseFollow.style.top = event.pageY + 'px'
            mouseFollow.style.left = event.pageX + 'px'
        }
    }

    /**
     * Swaps the orientation class of a .mouseFollow element between 'horizontal' and 'vertical
     */
    rotateMouseFollow() {
        const mouseFollow = document.querySelector('.mouseFollow')

        if (mouseFollow !== null) {
            const newOrientationClass = mouseFollow.classList.contains('horizontal') ? 'vertical' : 'horizontal'
            const oldOrientationClass = mouseFollow.classList.contains('horizontal') ? 'horizontal' : 'vertical'

            mouseFollow.classList.replace(oldOrientationClass, newOrientationClass)
        }
    }

    /**
     * Removes the .mouseFollow element from the DOM
     */
    removeMouseFollow() {
        if(document.querySelector('.mouseFollow')) {
            document.querySelector('.mouseFollow').remove()
        }
    }

    /**
     * Checks to see if a board object exists in the DOM
     * 
     * @param {number} boardId pseudo-UUID of the Board to look for
     * 
     * @returns {boolean} Does the board exist?
     */
    boardExists(boardId) {
        return document.getElementById(boardId) !== null ? true : false
    }

    /**
     * Sets which board object is active
     * 
     * @param {number} boardIndex Index of the board to make active
     */
    setActiveBoard(boardIndex) {
        const boards = document.querySelectorAll('.board')

        boards.forEach(e => {
            e.classList.remove('board--active')
        })

        boards[boardIndex].classList.add('board--active')
    }

    /**
     * Adds a class to a tile DOM node
     * 
     * @param {number} status status code to set the tile class based on
     * @param {DOMNode} tile DOM node of the tile to update
     */
    setTileClass(status, tile) {
        switch (status) {
            case STATUS_CODE.hit:
            case STATUS_CODE.sunk:
            case STATUS_CODE.gameover:
                tile.classList.add('tile--hit')
                break;
            
            case STATUS_CODE.miss:
                tile.classList.add('tile--miss')
                break;
            
            case STATUS_CODE.ship:
                tile.classList.add('tile--ship')
                break;
        
            default:
                break;
        }
    }
}
