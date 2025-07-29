import { ExtendedObject3D } from "../utils/ExtendedObject3D";

export class Grid extends ExtendedObject3D {
  static COLUMNS = Math.floor(window.innerWidth / 100) | 1;
  static ROWS = Math.floor(window.innerHeight / 100) | 1;
  constructor() {
    super();
  }

  resize(event) {
    Grid.COLUMNS = Math.floor(window.innerWidth / 100) | 1;
    Grid.ROWS = Math.floor(window.innerHeight / 100) | 1;
  }

  update(dt) {}
}
