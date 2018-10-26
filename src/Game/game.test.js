import { Game } from './index'
import { Player } from '../Player'

const player1 = new Player()
const player2 = new Player()
const game = new Game([player1, player2])

test('Default', () => {
    expect(1+1).toBe(2)
})