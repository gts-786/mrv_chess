import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../images/black-bishop.png';
import whiteLogo from '../../images/white-bishop.png';

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);// Вызов контсруктора родительского класса - Figure
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }
}