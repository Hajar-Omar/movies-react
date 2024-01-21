import React, { useState, useEffect } from "react";

const rowStyle = {
  display: "flex",
  width: "204px",
  flexWrap: "wrap",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Square({ value, setValue, next }) {
  const placeX = () => {
    if (!value) {
      // empty
      if (next === "X") {
        setValue("X");
      } else setValue("O");
    }
  };

  return (
    <div className="square" onClick={placeX} style={squareStyle}>
      {" "}
      {value}
    </div>
  );
}

function Board() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [next, setNext] = useState("X");
  const [winner, setWinner] = useState("");

  const setValue = (val, i) => {
    boxes[i] = val;
    setNext(val === "X" ? "O" : "X");
  };

  // detect Winner
  useEffect(() => {
    winningLines.forEach((e, i) => {
      if (
        boxes[e[0]] &&
        boxes[e[0]] === boxes[e[1]] &&
        boxes[e[0]] === boxes[e[2]]
      ) {
        setWinner(next === "X" ? "O" : "X");
      }
    });
  }, [next]);

  const reset = () => {
    setBoxes(Array(9).fill(""));
    setNext("X");
    setWinner("");
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{next}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button style={buttonStyle} onClick={reset}>
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          {boxes.length &&
            boxes.map((e, i) => (
              <Square
                key={i}
                value={e}
                next={next}
                setValue={(val) => setValue(val, i)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

function TicTacToe() {
  return <Game />;
}

export default TicTacToe;
