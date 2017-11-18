import {} from "jest";
import { Cell } from "../src/Cell";

describe("Cell", () => {

  let cell: Cell;

  beforeEach(() => {
    cell = new Cell();
  });

  it("should die when underpopulation", () => {
    cell.evolve(1);
    expect(cell.isAlive()).toBe(false);
  });

  it("should live when normal population", () => {
    cell.evolve(2);
    expect(cell.isAlive()).toBe(true);
  });

  it("should live when over population", () => {
    cell.evolve(4);
    expect(cell.isAlive()).toBe(false);
  });

  it("should born when exactly three neighbors", () => {
    cell.evolve(3);
    expect(cell.isAlive()).toBe(true);
  });
});