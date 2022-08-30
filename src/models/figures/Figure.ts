import { Cell } from './../Cell';
import { Colors } from './../Colors';
import logo from '../../images/black-king.png';

export enum FigureNames {
    FIGURE = "Фигура",
    KING = "Король",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    KNIGHT = "Конь",
    BISHOP = "Слон",
    PAWN = "Пешка",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;


    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        return true;
    }
    moveFigure(target: Cell): void {
        
    };
}