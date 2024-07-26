// Model: Initialize the board with 12 holes
const Model = (() => {
    const board = [];
    for (let i = 1; i <= 12; i++) {
        board.push({ id: i, hasMole: false ,hasSnake: false });
    }
    return board;
})();

class State {
    #board = [];
    #score = 0;
    #time = 30;
    #maxMoles = 3;
    #intervalId = null;
    #timerId = null;

    constructor(view, model) {
        this.view = view;
        this.#board = model; // Initialize board from model
    }

    get board() {
        return this.#board;
    }

    set board(newBoard) {
        this.#board = newBoard;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
        this.view.updateScore(this.#score);
    }

    get time() {
        return this.#time;
    }

    set time(value) {
        this.#time = value;
        this.view.updateTimer(this.#time);
    }

    initializeBoard() {
        this.#board = Model.map(hole => ({ ...hole, hasMole: false , hasSnake: false}));
    }

    resetGame() {
        this.#score = 0;
        this.#time = 30;
        this.initializeBoard();
        this.view.renderBoard(this.#board);
        this.view.updateScore(this.#score);
        this.view.updateTimer(this.#time);
    }

    endGame() {
        clearInterval(this.#intervalId);
        clearInterval(this.#timerId);
        alert('Time is Over!');
    }

    getRandomEmptyHole() {
        const emptyHoles = this.#board.filter(hole => !hole.hasMole);
        if (emptyHoles.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * emptyHoles.length);
        return emptyHoles[randomIndex];
    }

    getRandomSnakeHole(){
        const snakeHoles= this.#board.filter(hole => !hole.hasSnake);
        if (snakeHoles.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * emptyHoles.length);
        return snakeHoles[randomIndex];
    }

    addMole() {
        if (this.#board.filter(hole => hole.hasMole).length >= this.#maxMoles){
            return;
        } 
        const hole = this.getRandomEmptyHole();
        if (hole) {
            hole.hasMole = true;
            this.view.renderMole(hole.id);
        }
    }
    addSnake(){
        const hole= this.getRandomSnakeHole();
        if (hole) {
            hole.hasMole = true;
            this.view.renderSnake(hole.id);
        }
    }

    showAllSnake(){
        const holes= this.#board.forEach(hole=>{
            

        });
    }

    removeMole(id) {
        const hole = this.#board.find(hole => hole.id === parseInt(id));
        if (hole && hole.hasMole) {
            hole.hasMole = false;
            this.view.removeMole(hole.id);
        }
    }

    

    decrementTime() {
        if (this.#time > 0) {
            this.#time--;
            this.view.updateTimer(this.#time);
        }
        if (this.#time === 0) {
            this.endGame();
        }
    }

    set intervalId(value) {
        this.#intervalId = value;
    }

    set timerId(value) {
        this.#timerId = value;
    }
}
//view
const View = (() => {
    const elestr = {
        startBtn: "#startButton",
        score: "#score",
        hole: ".hole",
        time: "#time",
        gamecontainer: ".gamecontainer"
    };

    const renderMole = (id) => {
        let i= parseInt(id)
        document.getElementById(id).innerHTML = `<img src="mole.jpg" alt="Mole" width="200" height="200" id=${i}>`;
    };

    const removeMole = (id) => {
        document.getElementById(id).innerHTML = '';
    };

    const updateScore = (score) => {
        document.getElementById('score').innerText = `${score}`;
    };

    const updateTimer = (time) => {
        document.getElementById('time').innerText = time;
    };

    const renderBoard = (board) => {
        board.forEach(hole => {
            const holeElement = document.getElementById(hole.id);
            holeElement.innerHTML = ''; // Clear all holes
        });
    };

    return {
        elestr,
        renderMole,
        removeMole,
        updateScore,
        updateTimer,
        renderBoard
    };
})();

const Controller = ((model, view) => {
    const state = new State(view, model);

    const startGame = () => {
        const ele = document.querySelector(view.elestr.startBtn);
		ele.addEventListener("click", (e) => {
            state.resetGame();
            state.intervalId = setInterval(() => {
                state.addMole();
            }, 1000);
            state.timerId = setInterval(() => {
                state.decrementTime();
            }, 1000);
        });
    };

    const handleClick = () => {
        const ele = document.querySelector(view.elestr.gamecontainer);
		ele.addEventListener("click", (e) => {
            const id = + e.target.id
            console.log(id);
            const hole = state.board.find(hole => hole.id === id);
            if (hole && hole.hasMole) {
                state.removeMole(id);
                state.score++;
            }
        });
        
    };

    const init = () => {
        state.resetGame();
    };

    const bootstrap= ()=> {
        init();
        startGame();
        handleClick();
    };
    return {bootstrap};

})(Model, View);

Controller.bootstrap();
