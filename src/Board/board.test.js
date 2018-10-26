import { Board } from "./index";
import { Ship } from "../Ship";

test('Set tile to 1, check if it\'s 1.', () => {
    const board = new Board(4,4)
    board.setTile(1, 2, 2)
    expect(board.checkTile(2, 2)).toBe(1)
})

test('Proper placement of ships.', () => {
    const board = new Board(4,4),
        horizontalShip = new Ship('smallship', 2),
        verticalShip = new Ship('smallship', 2)

    board.placeShip(horizontalShip, 'horizontal', 1, 1)
    board.placeShip(verticalShip, 'vertical', 4, 3)

    expect(board.tiles).toEqual(
        [
            [horizontalShip,horizontalShip,0,0],
            [0,0,0,0],
            [0,0,0,verticalShip],
            [0,0,0,verticalShip]
        ]
    )
})