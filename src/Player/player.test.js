import { Player } from './index'
import { Board } from '../board'
import { Ship } from '../Ship'

const board1 = new Board(4,4)
const player1 = new Player(board1)

const player2 = new Player(new Board(4,4))

const ship = new Ship('ship', 2)
board1.placeShip(ship, 0, 2, 2)

test('Attack and a miss.', () => {
    expect(player2.attack(player1, 1, 1)).toBe(0)
})

test('Attack and a hit.', () => {
    expect(player2.attack(player1, 2, 2)).toBe(2)
})

test('Attack and already taken.', () => {
    expect(player2.attack(player1, 2, 2)).toBe(1)
})

test('Attack and ship sinks.', () => {
    player2.attack(player1, 2, 2)
    expect(player2.attack(player1, 3, 2)).toBe(3)
})
