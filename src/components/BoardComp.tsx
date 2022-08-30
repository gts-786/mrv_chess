import { Cell } from "models/Cell";
import React, { useState } from "react";
import { FC } from "react";
import { Board } from "../models/Board";
import CellComp from "./CellComp";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComp: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
    function click(cell: Cell) {
        if (cell.figure) {
            setSelectedCell(cell);
        }
    }

    return (
        <div className="board">
            {board.cells.map ((row, index: number) => 
            <React.Fragment key={index}>
                {row.map(cell => 
                    <CellComp cell={cell} key={cell.id} 
                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                    click={click}
                    />)}
            </React.Fragment>
            )}
        </div>
    );
};
export default BoardComp;