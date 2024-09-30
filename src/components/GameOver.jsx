import React, { useContext } from "react";
import { AppContext } from "../App";

export function GameOver() {

    const { gameOver, currentAttempt, correctWord } = useContext(AppContext);

    return (
        <div className="game">
            <h3>
                {gameOver.guessedWord 
                    ? "Adivinaste la palabra!" 
                    : "Perdiste!"}
            </h3>
            <h1>
                Correct word: {correctWord}
            </h1>
            {gameOver.guessedWord && (
                <h3>La descubriste en {currentAttempt.attempt} intentos</h3>
            )}
        </div>
    )
};