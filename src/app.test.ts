import { Orientation, Instruction, Rover } from "./app";

describe("Mars Rover Kata", () => {
  describe("Rover", () => {
    it("should start with an orientation of N", () => {
      const newRover = new Rover();
      expect(newRover.getOrientation()).toBe(Orientation.North);
    });
    it("should have a position of 0:0", () => {
      const newRover = new Rover();
      expect(newRover.getPosition()).toBe("0:0");
    });

    describe("turn left", () => {
      it("should rotate left from North to West", () => {
        const rover = new Rover();

        rover.execute(Instruction.Left);

        expect(rover.getOrientation()).toEqual(Orientation.West);
      });

      it("should rotate left twice from North to South", () => {
        const rover = new Rover();
        rover.execute(Instruction.Left);

        rover.execute(Instruction.Left);

        expect(rover.getOrientation()).toEqual(Orientation.South);
      });

      it("should rotate left three times from North to East", () => {
        const rover = new Rover();
        rover.execute(Instruction.Left);
        rover.execute(Instruction.Left);

        rover.execute(Instruction.Left);

        expect(rover.getOrientation()).toEqual(Orientation.East);
      });

      it("should rotate left four times from North to North", () => {
        const rover = new Rover();
        rover.execute(Instruction.Left);
        rover.execute(Instruction.Left);
        rover.execute(Instruction.Left);

        rover.execute(Instruction.Left);

        expect(rover.getOrientation()).toEqual(Orientation.North);
      });
    });

    describe("turn Right", () => {
      it("should rotate right from North to East", () => {
        const rover = new Rover();

        rover.execute(Instruction.Right);

        expect(rover.getOrientation()).toEqual(Orientation.East);
      });

      it("should rotate twice right from North to South", () => {
        const rover = new Rover();
        rover.execute(Instruction.Right);

        rover.execute(Instruction.Right);

        expect(rover.getOrientation()).toEqual(Orientation.South);
      });

      it("should rotate three right from North to West", () => {
        const rover = new Rover();
        rover.execute(Instruction.Right);
        rover.execute(Instruction.Right);

        rover.execute(Instruction.Right);

        expect(rover.getOrientation()).toEqual(Orientation.West);
      });

      it("should rotate four right from North to North", () => {
        const rover = new Rover();
        rover.execute(Instruction.Right);
        rover.execute(Instruction.Right);
        rover.execute(Instruction.Right);

        rover.execute(Instruction.Right);

        expect(rover.getOrientation()).toEqual(Orientation.North);
      });
    });

    describe("when taking multiple instructions", () => {
      it.each([
        ["L", Orientation.West],
        ["LL", Orientation.South],
        ["LLL", Orientation.East],
        ["LLLL", Orientation.North],
        ["R", Orientation.East],
        ["RR", Orientation.South],
        ["RRR", Orientation.West],
        ["RRRR", Orientation.North],
      ])("given %s the rover should face %s", (input, expectedOrientation) => {
        const rover = new Rover();

        rover.execute(input);

        expect(rover.getOrientation()).toEqual(expectedOrientation);
      });
    });

    describe("moving when facing north", () => {
      it.each([
        ["M", "0:1"],
        ["MM", "0:2"],
        ["MMM", "0:3"],
      ])("given %s it moves to %s", (input, expectedOrientation) => {
        const rover = new Rover();

        rover.execute(input);

        expect(rover.getPosition()).toEqual(expectedOrientation);
      });
    });

    describe("moving when facing south", () => {
      it.each([["M", "0:9"]])(
        "given %s it moves to %s",
        (input, expectedOrientation) => {
          const rover = new Rover();
          rover.execute("LL");
          rover.execute(input);

          expect(rover.getPosition()).toEqual(expectedOrientation);
        }
      );
    });
  });
});
