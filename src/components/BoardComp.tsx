import React from "react";
import { FC } from "react";
import { Board } from "../models/Board";
import CellComp from "./CellComp";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComp: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className="board">
            {board.cells.map ((row, index: number) => 
            <React.Fragment key={index}>
                {row.map(cell => 
                    <CellComp cell={cell} key={cell.id}/>)}
            </React.Fragment>
            )}
        </div>
    );
};
export default BoardComp;