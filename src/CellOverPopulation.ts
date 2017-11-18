import Cell from "./Cell";
import CellRules from "./CellRules";

export default class CellOverPopulation implements CellRules {
    accomplished(cell: Cell, neighbours: number): boolean {
        console.log(cell.isAlive() && neighbours > 3);
        return cell.isAlive() && neighbours > 3;
    }
    execute(): Cell {
       return Cell.deadCell();
    }

}
