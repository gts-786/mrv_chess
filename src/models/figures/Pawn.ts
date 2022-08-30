import { Figure, FigureNames } from './Figure';
import blackLogo from '../../images/black-pawn.png';
import whiteLogo from '../../images/white-pawn.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Pawn extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        return true;
    }
}