import LostFigures from "components/LostFigures";
import Timer from "components/Timer";
import { Colors } from "models/Colors";
import { Player } from "models/Player";
import { useEffect, useState } from "react";
import "./App.css"
import BoardComp from "./components/BoardComp";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer);
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="app">
      <Timer
      restart={restart}
      currentPlayer={currentPlayer}
      />
      <BoardComp
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures
          title="Black figures"
          figures={board.lostBlackFigures}
        />
        <LostFigures
          title="White figures"
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  );
}

export default App;
