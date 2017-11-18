import "jest";
import Cell from "../src/Cell";

describe("Cell should", () => {

  let cell: Cell;

  beforeEach(() => {
    cell = Cell.aliveCell();
  });

  it("die when under population", () => {
    cell.evolve(1);
    expect(cell.isAlive()).toBe(false);
  });

  it("live when normal population", () => {
    cell.evolve(2);
    expect(cell.isAlive()).toBe(true);
  });

  it("die when over population", () => {
    cell.evolve(4);
    expect(cell.isAlive()).toBe(false);
  });

  it("born when exactly three neighbors", () => {
    const deadCell = Cell.deadCell();
    deadCell.evolve(3);
    expect(deadCell.isAlive()).toBe(true);
  });
});