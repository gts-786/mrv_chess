import { Cell } from "models/Cell";
import React, { useEffect, useState } from "react";
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
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        }
        else {
            setSelectedCell(cell);
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard () {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard);
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