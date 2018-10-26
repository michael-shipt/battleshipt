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
    }
}