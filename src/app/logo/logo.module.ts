export enum GeometryType {
  Rectengular,
  Triangle,
  Circle
}

export class Logo {
  public name: string;
  public description: string;
  // public imagePath: string;
  public id: number;
  public front: string;
  public geometryType: GeometryType;

  constructor(name: string, desc: string, geometryType: GeometryType, id: number, front : string) {
    this.name = name;
    this.description = desc;
    this.geometryType = geometryType;
    this.front = front;
    this.id = id;
  }
}
