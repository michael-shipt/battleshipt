import { Ship } from './index'

test('Ship hit loses HP.', () => {
    const ship = new Ship('ship', 3)
    ship.hit()
    expect(ship.hp).toEqual(2)
})

test('Ship loses all HP is sunk.',  () => {
    const ship = new Ship('ship', 3) // ship.hp = 3
    ship.hit() // ship.hp = 2
    ship.hit() // ship.hp = 1
    ship.hit() // ship.hp = 0
    expect(ship.sunk).toBe(true)
})
