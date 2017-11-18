import CellRules from "./CellRules";
import Cell from "./Cell";
export default class CellUnderPopulation implements CellRules {
    accomplished(cell: Cell, neighbours: number): boolean {
        throw new Error("Method not implemented.");
    }
    execute(): Cell {
        throw new Error("Method not implemented.");
    }

}