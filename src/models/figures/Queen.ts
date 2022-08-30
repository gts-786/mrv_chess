import { Figure, FigureNames } from './Figure';
import blackLogo from '../../images/black-queen.png';
import whiteLogo from '../../images/white-queen.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Queen extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        return true;
    }
}