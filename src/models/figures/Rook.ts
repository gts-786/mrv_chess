import { Figure, FigureNames } from './Figure';
import blackLogo from '../../images/black-rook.png';
import whiteLogo from '../../images/white-rook.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Rook extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        return true;
    }
}