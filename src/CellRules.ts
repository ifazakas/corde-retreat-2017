import Cell from "./Cell";

export default interface CellRule {
    accomplished(cell: Cell, neighbours: number): boolean;
    execute(): Cell;
}