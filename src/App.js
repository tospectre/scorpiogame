import React, {Component} from "react";
import PlayerDeclaration from "./PlayerDeclaration";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Game/>
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return (
            // le onClick event sur le buton est un listener qui permet permet de dire : à chaque fois qu'un boutton dans
            // dans le carré est cliqué, utilise le onClick() event qui ce trouve dans le props
            // provenant du board component
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props, context) {
        /*
        * When using constructor in component, we must call parent's constructor passing arguments (here props & context)
        * using super() method
        */
        super(props, context);
        /*
        * Here we update the state of Board component by initializing property named 'square' with an array filled
        * with null values
        */
        this.state = {
            square: Array(9).fill(null),
            playerTurn: 'Rachid'
        };
    }

    render() {
        const status = 'Next player: ' + this.state.playerTurn;

        return (
            <>
                <div>
                    <div className="status">{status}</div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </>
        );
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.square[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    handleClick(i) {
    }
}

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isPlayersReady: false,
        };
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {
                        this.state.isPlayersReady
                            ? <Board/>
                            : (
                                alert('Le nom des joueurs ne sont pas déclarer, ' +
                                    'Vous allez etre redirigé vers la page de déclaration des joueurs'),
                                    <PlayerDeclaration/>
                            )
                    }
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}
export default App;
