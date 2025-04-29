import React, {useState} from "react";
import Square from "./Square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
         const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
         ];

         for(let logic of winnerLogic){
            const[a, b, c] = logic; //assigned values of each element of winnerLogic array to const logic one by one
            if(state[a] != null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
         }
         return false;
    };

    const isWinner = checkWinner();

    const handleClick = (index) => { //can track the index clicked //can check by console log index

        if(state[index] !== null){
            return null; // if a box already having X or O is clicked, don't change it. Do nothing.
        }

        const copyState = [...state]; //array with null values copied
        copyState[index] = isXTurn ? "X" : "0"; //if it's X's turn X is printed else O
        setState(copyState); /*updates the state with the modified copyState.)
        React will re-render the component using this new state, reflecting the latest move on the board.*/
        setIsXTurn(!isXTurn);
    };

    const handleReset = () => {
        setState(Array(9).fill(null)); //makes all blocks empty again
    } 

    return(
       <div className="board-container">
        {isWinner ? (
            <>{isWinner} Won the game <button onClick={handleReset}>Play Again</button></>
        ) : (
            <>
            <h4>Player {isXTurn ? "X" : "O"} Please move!</h4>
            <div className="board-row">
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]}/>
                <Square onClick={() => handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(3)} value={state[3]}/>
                <Square onClick={() => handleClick(4)} value={state[4]}/>
                <Square onClick={() => handleClick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(6)} value={state[6]}/>
                <Square onClick={() => handleClick(7)} value={state[7]}/>
                <Square onClick={() => handleClick(8)} value={state[8]}/>
            </div> 
            <button onClick={handleReset}>Restart</button>
            </>
        )}  
       </div> 
    );
};

export default Board;  