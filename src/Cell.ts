import { int } from "aws-sdk/clients/datapipeline";
import CellGoingToReborn from "./CellIGoingToReborn";
import CellOverPopulation from "./CellOverPopulation";
import CellUnderPopulation from "./CellIUnderPopulation";

const rules = [
    new CellGoingToReborn(),
    new CellOverPopulation(),
    new CellUnderPopulation(),
];
export default class Cell {
    lives: boolean;
    private constructor(alive: boolean) {
        this.lives = alive;
    }

    static aliveCell() {
        return new Cell(true);
    }

    static deadCell() {
        return new Cell(false);
    }

    evolve(neighbours: number) {
        for (const rule of rules) {
            if (rule.accomplished(this, neighbours)) {
                return rule.execute();
            }
        }

        return Cell.aliveCell();
    }

    public isAlive(): boolean {
        return this.lives;
    }
}