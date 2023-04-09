import React, {Component} from "react";
import App from "./App";

class PlayerDeclaration extends Component {

    parentCallback(playerOneName, playerTwoName) {
        const players = [playerOneName, playerTwoName]
        console.log('parentCallback methode has been called ')
        return (
            <App />
        );
    }

    render() {
        const playerOneName = 'toto';
        const playerTwoName = 'titi';

        return (
            <>
                <h1>Vous voici dans la page déclaration des joueurs</h1>
                <label>Nom du premier joueur :</label> <input/> <br/>
                <label>Nom du second joueur :</label> <input/>
                <button
                    onClick={() => this.parentCallback(playerOneName, playerTwoName)}
                > Valider
                </button>
            </>
        );
    }
}

export default PlayerDeclaration;