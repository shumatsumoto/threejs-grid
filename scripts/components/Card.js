import {
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Vector2,
  Vector3,
} from "three";
import { ExtendedObject3D } from "../utils/ExtendedObject3D";
import * as THREE from "three";
import { Grid } from "./Grid.js";
import { MainThree } from "../MainThree.js";

export class Card extends ExtendedObject3D {
  static #_DefaultScale = new Vector3();
  static Geometry = new PlaneGeometry(1, 1);

  gridPosition = new Vector2();
  mesh;

  constructor(i, j) {
    super();
    this.gridPosition.set(i, j);
    this.#_createMesh();
  }

  #_createMesh() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);

    this.mesh = new Mesh(
      Card.Geometry,
      new MeshBasicMaterial({ color: new THREE.Color(`rgb(${r}, ${g}, ${b})`) })
    );

    this.mesh.scale.copy(Card.#_DefaultScale);

    this.add(this.mesh);
  }

  static SetScale() {
    const aspect = window.innerWidth / window.innerHeight;
    const viewWidth = MainThree.Camera.right - MainThree.Camera.left;
    const columnWidth = viewWidth / Grid.COLUMNS;
    this.#_DefaultScale.x = columnWidth;
    this.#_DefaultScale.y = columnWidth / aspect;
  }

  resize(event) {
    this.mesh.scale.copy(Card.#_DefaultScale);
  }

  update(dt) {}
}
