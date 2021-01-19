export enum Orientation {
  North = "N",
  South = "S",
  East = "E",
  West = "W",
}

export enum Instruction {
  Left = "L",
  Right = "R",
  Move = "M",
}

export class Rover {
  private orientation: string;
  private position: string;
  private y: number;

  constructor() {
    this.orientation = Orientation.North;
    this.y = 0;
  }

  private readonly leftTurn = {
    [Orientation.North]: Orientation.West,
    [Orientation.South]: Orientation.East,
    [Orientation.East]: Orientation.North,
    [Orientation.West]: Orientation.South,
  };

  private readonly rightTurn = {
    [Orientation.North]: Orientation.East,
    [Orientation.East]: Orientation.South,
    [Orientation.South]: Orientation.West,
    [Orientation.West]: Orientation.North,
  };

  getOrientation() {
    return this.orientation;
  }

  getPosition() {
    return `0:${this.y}`;
  }

  execute(instructions: string) {
    for (const instruction of instructions) {
      if (instruction === Instruction.Right) {
        this.turnRight();
      } else if (instruction === Instruction.Move) {
        this.move();
      } else {
        this.turnLeft();
      }
    }
  }

  private move() {
    if (this.orientation === Orientation.North)
      this.y++;
    else {
      this.y = 9;
    }
  }

  private turnRight() {
    this.orientation = this.rightTurn[this.orientation];
  }

  private turnLeft() {
    this.orientation = this.leftTurn[this.orientation];
  }
}
