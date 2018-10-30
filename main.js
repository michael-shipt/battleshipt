/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Board/board.js":
/*!****************************!*\
  !*** ./src/Board/board.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ship */ \"./src/Ship/index.js\");\n\n\n// Orientation enum\nconst ORIENTATION = {\n    horizontal: 0,\n    vertical: 1\n}\n\n/**\n * Board class represents a player's board: a grid of n tiles.\n * \n * @access public\n */\nclass Board {\n    /**\n     * Constructs a new Board instance\n     * \n     * @param {number} width the width of the board\n     * @param {number} height the height of the board\n     * @param {array} shipList a list of arrays containing [0] ship name and [1] ship hp\n     */\n    constructor(width, height, shipList) {\n        this.name = `board_${Math.floor(1000 + Math.random() * 9000)}`\n        this.width = width\n        this.height = height\n        this.tiles = this.createBoard(width, height)\n        this.ships = this.createShips(shipList)\n    }\n\n    /**\n     * Creates a new board a 2d array (length x) of arrays (length y)\n     * \n     * @param {number} width the width of the board\n     * @param {number} height the height of the board\n     * \n     * @returns {number[]} a 2d array\n     */\n    createBoard(width, height) {\n        let board = []\n\n        for (let i = 1; i <= height; i++) {\n            board.push(new Array(width).fill(0))\n        }\n\n        return board\n    }\n\n    /**\n     * Creates an array of Ship instances\n     * \n     * @param {array} shipList a list of arrays containing [0] ship name and [1] ship hp\n     * \n     * @returns {array} Array of Ship instances\n     */\n    createShips(shipList) {\n        let ships = []\n\n        shipList.forEach(ship => {\n            const shipName = ship[0],\n                shipLength = ship[1]\n\n            ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"](shipName, shipLength))\n        })\n\n        return ships\n    }\n\n    /**\n     * Places a Ship instance on the Board\n     * \n     * @param {Ship} ship a Ship instance to be placed on the board\n     * @param {number} orientation 0 for horizontal or 1 for vertical\n     * @param {number} x the x coordinate of the piece\n     * @param {number} y the y coordinate of the piece\n     */\n    placeShip(ship, orientation, x, y) {\n        x = x - 1\n        y = y - 1\n\n        if (ship === null) {\n            return null\n        }\n\n        // MP: prevent overflowing to next row/overflowing the board?\n        if (orientation === ORIENTATION.horizontal) {\n            for (let i = 0; i < ship.hp; i++) {\n                this.tiles[y][x + i] = ship\n            }\n        } else if (orientation === ORIENTATION.vertical) {\n            for (let i = 0; i < ship.hp; i++) {\n                this.tiles[y + i][x] = ship\n            }\n        }\n    }\n\n    /**\n     * Checks the current status of a tile on the Board\n     * \n     * @param {number} x x coordinate of tile to check\n     * @param {number} y y coordinate of tile to check\n     * \n     * @return {boolean} the value of the tile at x, y\n     */\n    checkTile(x, y) {\n        return this.tiles[y - 1][x - 1]\n    }\n\n    /**\n     * Sets the status of a specified tile on the board\n     * \n     * @param {number} status status of the tile, 0 for unattacked, 1 for attacked\n     * @param {number} x x coordinate of the tile to set\n     * @param {number} y y coordinate of the tile to set\n     */\n    setTile(status, x, y) {\n        this.tiles[y-1][x-1] = status\n    }\n\n    /**\n     * Checks to see if all ships on the board are sunk\n     * \n     * @returns {bool} Are all the ships on the board sunk?\n     */\n    areAllShipsSunk() {\n        return this.ships.every(ship => ship.sunk)\n    }\n}\n\n//# sourceURL=webpack:///./src/Board/board.js?");

/***/ }),

/***/ "./src/Board/index.js":
/*!****************************!*\
  !*** ./src/Board/index.js ***!
  \****************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/Board/board.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/Board/index.js?");

/***/ }),

/***/ "./src/Controller/controller.js":
/*!**************************************!*\
  !*** ./src/Controller/controller.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Game */ \"./src/Game/index.js\");\n\n\n/**\n * Represents the Controller\n */\nclass Controller {\n    /**\n     * Constructs a new controller\n     * \n     * @param {View} view View instance of the game\n     */\n    constructor(view) {\n        this.view = view\n        this.game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](view, 2, [\n            ['carrier', 5],\n            ['battleship', 4],\n            ['cruiser', 3],\n            ['submarine', 3],\n            ['destroyer', 2],\n        ])\n\n        this.clickHandler()\n        this.mouseMoveHandler()\n    }\n\n    mouseMoveHandler() {\n        document.addEventListener('mousemove', event => {\n            const mouseFollow = document.querySelector('.mouseFollow')\n\n            if (mouseFollow !== null) {\n                mouseFollow.style.top = event.pageY + 'px'\n                mouseFollow.style.left = event.pageX + 'px'\n            }\n        })\n    }\n\n    /**\n     * Listens for any click on a tile and fires an attack event\n     */\n    clickHandler() {\n        const tiles = document.querySelectorAll('div.tile')\n\n        tiles.forEach(tile => {\n            tile.addEventListener('click', event => {\n                const board = [...event.target.parentElement.parentElement.children].indexOf(event.target.parentElement)\n                const tile = [...event.target.parentElement.children].indexOf(event.target)+1\n\n                const y = Math.ceil(tile / 10)\n                const x = tile - ((y-1)*10)\n                \n                const attackEvent = new CustomEvent('attack', { detail: { target: event.target, board, x, y } })\n                document.dispatchEvent(attackEvent)\n            })\n        })\n    }\n}\n\n//# sourceURL=webpack:///./src/Controller/controller.js?");

/***/ }),

/***/ "./src/Controller/index.js":
/*!*********************************!*\
  !*** ./src/Controller/index.js ***!
  \*********************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/Controller/controller.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/Controller/index.js?");

/***/ }),

/***/ "./src/Game/game.js":
/*!**************************!*\
  !*** ./src/Game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Player */ \"./src/Player/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\n\n\n/**\n * Represents the Game logic\n */\nclass Game {\n    /**\n     * \n     * @param {View} view View instance\n     * @param {number} numberOfPlayers number of players in the game\n     * @param {array} shipList a list of arrays containing [0] ship name and [1] ship hp\n     */\n    constructor(view, numberOfPlayers, shipList) {\n        this.view = view\n        this.shipList = shipList\n        this.players = this.createPlayers(numberOfPlayers)\n        \n        this.currentPlayer = 0\n        this.lastPlayer = numberOfPlayers - 1\n        this.over = false\n        \n        this.start()\n    }\n\n    /**\n     * Create n number of Player instances\n     * \n     * @param {number} numberOfPlayers Number of players to create\n     * \n     * @returns {array} list of Player instances\n     */\n    createPlayers(numberOfPlayers) {\n        let players = []\n\n        for (let i = 0; i < numberOfPlayers; i++) {\n            const player = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"Player\"](this.shipList)\n            players.push(player)\n        }\n\n        return players\n    }\n\n    /**\n     * Start the game by drawing boards and creating ships for each player, then begin the gameloop\n     */\n    start() {\n        this.players.forEach(player => {\n            \n            const { board } = player\n\n            this.view.drawBoard(board)\n            board.createShips(this.shipList)\n        })\n\n        this.placeShips(this.gameLoop.bind(this))\n    }\n\n    /**\n     * Loops through all players and their ships for placement on the board\n     * \n     * @param {function} callback called once all ships have been placed\n     */\n    // MP: refactor? listen for \"R\" keycode to rotate piece? Call View to show the piece tracked to the mouse?\n    placeShips(callback) {\n        let shipCounter = 0,\n            playerCounter = 0\n\n        this.view.setActiveBoard(playerCounter)\n        this.view.createMouseFollow(this.players[0].board.ships[0].hp,0)\n    \n        document.addEventListener('attack', event => {\n            \n            const {board, x, y} = event.detail,\n                  activePlayer = this.players[playerCounter]\n\n            if (board !== playerCounter) { return }\n\n            activePlayer.board.placeShip(activePlayer.board.ships[shipCounter], 0, x, y)\n            shipCounter = (shipCounter + 1) % this.shipList.length\n            \n            if (shipCounter === 0) {\n                playerCounter = playerCounter + 1\n            }\n\n            this.view.updateBoard(activePlayer.board)\n            \n            if (playerCounter !== this.players.length) {\n                this.view.setActiveBoard(playerCounter)\n            } else {\n                this.view.removeMouseFollow()\n                callback()\n                return\n            }\n\n            this.view.createMouseFollow(activePlayer.board.ships[shipCounter].hp,0)\n        })\n    }\n\n    /**\n     * A loop of the game; one players' turn\n     */\n    gameLoop() {\n        this.view.setActiveBoard(this.lastPlayer)\n\n        const activePlayer = this.players[this.currentPlayer],\n              lastPlayer = this.players[this.lastPlayer]\n\n        const turn = attackHandler.bind(this)\n\n        if(!this.over) {\n            // Listen for an 'attack'\n            document.addEventListener('attack', turn, false)\n        }\n\n        function attackHandler(event) {\n            // Remove the event listener until the next loop so we avoid double firing\n            document.removeEventListener('attack', turn, false)\n    \n            const {board, x, y, target} = event.detail\n            \n            // Ignore it if it came from current player's board\n            if (board !== this.lastPlayer) { \n                alert('wrong board')\n                this.gameLoop()\n                return\n            }\n\n            // Get the coordinates of the click and attack that location\n            const status = activePlayer.attack(lastPlayer, x, y)\n\n            this.view.setTileClass(status, target)\n\n            if (status === _helpers__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE\"].gameover) {\n                // The game is over\n                this.gameOver()\n            }\n\n            if (status !== _helpers__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE\"].taken) {\n                // Advance to next player\n                this.advancePlayer()\n            }\n\n            // Recursion\n            this.gameLoop()\n        }\n    }\n\n    /**\n     * Advance to the next player in the list\n     */\n    advancePlayer() {\n        this.lastPlayer = this.currentPlayer\n        \n        if (this.currentPlayer < this.players.length - 1) {\n            this.currentPlayer++\n        } else {\n            this.currentPlayer = 0\n        }\n\n        console.log(`Player ${this.currentPlayer}'s turn!`)\n    }\n\n    /**\n     * Called when the game is over.\n     */\n    gameOver() {\n        // TODO: Have an actual game over alert/continue to reset game\n        if (confirm('Game over! Would you like to play again?')) {\n            document.location.reload()\n        } else {\n            return null\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/Game/game.js?");

/***/ }),

/***/ "./src/Game/index.js":
/*!***************************!*\
  !*** ./src/Game/index.js ***!
  \***************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/Game/game.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/Game/index.js?");

/***/ }),

/***/ "./src/Player/index.js":
/*!*****************************!*\
  !*** ./src/Player/index.js ***!
  \*****************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/Player/player.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/Player/index.js?");

/***/ }),

/***/ "./src/Player/player.js":
/*!******************************!*\
  !*** ./src/Player/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Board */ \"./src/Board/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\n\n\n/**\n * Player classes represents a player of the game\n * \n * @access public\n */\nclass Player {\n    /**\n     * Constructs a new Player instance\n     * \n     * @param {array} shipList a list of arrays containing [0] ship name and [1] ship hp\n     */\n    constructor(shipList) {\n        this.board = new _Board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"](10, 10, shipList)\n    }\n\n    /**\n     * Check a player's board at coordinates x, y, hits if possible, and returns a status code\n     * \n     * @param {Player} player instance of Player to attack\n     * @param {number} x x coordinate to attack on Player's board\n     * @param {number} y y coordinate to attack on Player's board\n     * \n     * @returns {number} status code of attack: 0 = miss, 1 = hit, 2 = taken, 3 = ship sunk\n     */\n    attack(player, x, y) {\n        const   opponentBoard = player.board,\n                tileStatus = opponentBoard.checkTile(x, y)\n        \n        // refactor\n        switch (tileStatus) {\n\n            case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE\"].miss:\n                opponentBoard.setTile(1, x, y)\n                console.log('Miss!')\n                return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE\"].miss\n\n            case _helpers__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE\"].taken:\n                console.log('Already taken!')\n                return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE\"].taken\n\n            default:\n                tileStatus.hit()\n                opponentBoard.setTile(1, x, y)\n\n                if (!tileStatus.sunk) {\n                    console.log('Hit!')\n                    return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE\"].hit\n                } else {\n                    if (opponentBoard.areAllShipsSunk()) {\n                        console.log('Game over, man. Game OVER!!')\n                        return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE\"].gameover\n                    }\n\n                    console.log('Sunk!')\n                    return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE\"].sunk\n\n                }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/Player/player.js?");

/***/ }),

/***/ "./src/Ship/index.js":
/*!***************************!*\
  !*** ./src/Ship/index.js ***!
  \***************************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/Ship/ship.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Ship\", function() { return _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/Ship/index.js?");

/***/ }),

/***/ "./src/Ship/ship.js":
/*!**************************!*\
  !*** ./src/Ship/ship.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ship; });\n/**\n * Ship class represents a ship game piece\n * \n * @access public\n */\nclass Ship {\n    /**\n     * Constucts a new Ship instance\n     * \n     * @param {string} name name of the ship\n     * @param {number} hp healthpoints, ans subsequently the size, of the ship\n     */\n    constructor(name, hp) {\n        this.name = name\n        this.hp = hp\n        this.sunk = false\n    }\n\n    /**\n     * \"Hits\" the ship, decreasing the HP, and setting its status to sunk if the hp reaches 0\n     */\n    hit() {\n        if (!this.sunk) {\n            this.hp--\n        }\n\n        if (this.hp == 0) {\n            this.sunk = true\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/Ship/ship.js?");

/***/ }),

/***/ "./src/View/index.js":
/*!***************************!*\
  !*** ./src/View/index.js ***!
  \***************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/View/view.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/View/index.js?");

/***/ }),

/***/ "./src/View/view.js":
/*!**************************!*\
  !*** ./src/View/view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\n\n/**\n * View class interacts with DOM\n * \n * @access public\n */\nclass View {\n    /**\n     * Constructs a View instance\n     */\n    constructor() {\n        this.app = document.getElementById('app')\n    }\n\n    /**\n     * Renders a Board to the DOM\n     * \n     * @param {Board} board Board to render in the DOM\n     */\n    drawBoard(board) {\n        if (!this.boardExists(board.name)) {\n            this.app.innerHTML += `<div class=\"board\" id=\"${board.name}\"></div>`\n        }\n\n        const tiles = board.tiles.map(row => {\n            return row.map(tile => {\n                const className = typeof tile === 'object' ? 'tile--ship' : ''\n                return `<div class=\"tile ${className}\"></div>`\n            }).join('')\n        }).join('')\n        \n        document.getElementById(board.name).innerHTML = tiles\n    }\n\n    updateBoard(board) {\n        const boardNode = document.getElementById(board.name),\n              tileNodes = boardNode.childNodes\n\n        board.tiles.forEach((row, ri) => {\n            row.forEach((tile, ti) => {\n                if (typeof tile === 'object') {\n                    tileNodes[(ri*10)+ti].classList.add('tile--ship')\n                    // console.log()\n                }\n            })\n        })\n    }\n\n    createMouseFollow(length, orientation) {\n        this.removeMouseFollow()\n\n        const followPiece = document.createElement('div')\n        followPiece.classList.add('mouseFollow')\n\n        const orientationClass = orientation === 0 ? 'horizontal' : 'vertical'\n\n        followPiece.classList.add('mouseFollow')\n        followPiece.classList.add(orientationClass)\n\n        document.body.append(followPiece)\n\n        for (let i = 0; i < length; i++) {\n            const tile = document.createElement('div')\n            tile.classList.add('tile')\n            tile.classList.add('tile--ship')\n            document.querySelector('.mouseFollow').appendChild(tile)\n        }\n    }\n\n    removeMouseFollow() {\n        console.log('remove');\n        \n        if(document.querySelector('.mouseFollow')) {\n            document.querySelector('.mouseFollow').remove()\n        }\n    }\n\n    /**\n     * Checks to see if a board object exists in the DOM\n     * \n     * @param {number} boardId pseudo-UUID of the Board to look for\n     * \n     * @returns {boolean} Does the board exist?\n     */\n    boardExists(boardId) {\n        return document.getElementById(boardId) !== null ? true : false\n    }\n\n    /**\n     * Sets which board object is active\n     * \n     * @param {number} boardIndex Index of the board to make active\n     */\n    setActiveBoard(boardIndex) {\n        const boards = document.querySelectorAll('.board')\n\n        boards.forEach(e => {\n            e.classList.remove('board--active')\n        })\n\n        boards[boardIndex].classList.add('board--active')\n    }\n\n    /**\n     * Adds a class to a tile DOM node\n     * \n     * @param {number} status status code to set the tile class based on\n     * @param {DOMNode} tile DOM node of the tile to update\n     */\n    setTileClass(status, tile) {\n        switch (status) {\n            case _helpers__WEBPACK_IMPORTED_MODULE_0__[\"STATUS_CODE\"].hit:\n            case _helpers__WEBPACK_IMPORTED_MODULE_0__[\"STATUS_CODE\"].sunk:\n            case _helpers__WEBPACK_IMPORTED_MODULE_0__[\"STATUS_CODE\"].gameover:\n                tile.classList.add('tile--hit')\n                break;\n            \n            case _helpers__WEBPACK_IMPORTED_MODULE_0__[\"STATUS_CODE\"].miss:\n                tile.classList.add('tile--miss')\n                break;\n            \n            case _helpers__WEBPACK_IMPORTED_MODULE_0__[\"STATUS_CODE\"].ship:\n                tile.classList.add('tile--ship')\n                break;\n        \n            default:\n                break;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/View/view.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: STATUS_CODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STATUS_CODE\", function() { return STATUS_CODE; });\nconst STATUS_CODE = {\n    'miss': 0,\n    'hit': 1,\n    'taken': 2,\n    'sunk': 3,\n    'gameover': 4,\n}\n\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ \"./src/View/index.js\");\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ \"./src/Controller/index.js\");\n\n\n\nconst view = new _View__WEBPACK_IMPORTED_MODULE_0__[\"View\"]()\nconst controller = new _Controller__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"](view)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });