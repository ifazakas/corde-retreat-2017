import Cell from "./Cell";
import CellRules from "./CellRules";

export default class CellGoingToReborn implements CellRules {
    accomplished(cell: Cell, neighbours: number): boolean {
        return cell.isAlive() && neighbours < 2;
    }
    execute(): Cell {
       return Cell.deadCell();
    }

}
