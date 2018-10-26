export default class Player {
    constructor(board) {
        this.board = board
    }

    attack(player, x, y) {
        const   opponentBoard = player.board,
                tileStatus = opponentBoard.checkTile(x, y)

        switch (tileStatus) {

            case 0:
                opponentBoard.setTile(1, x, y)
                return 'Miss!'

            case 1:
                return 'Already taken!'

            default:
                if (!tileStatus.hit()) {
                    opponentBoard.setTile(1, x, y)
                    return 'Hit!'
                } else {
                    return 'Ship Sunk!'
                }
        }
    }
}