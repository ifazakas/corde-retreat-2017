

export class Cell {
    lives: boolean;
    constructor() {
        this.lives = true;
    }

    evolve(neighbors: number) {
        if (neighbors < 2 || neighbors > 3) {
            this.lives = false;
        }
     }

    isAlive() {
        return this.lives;
    }
}