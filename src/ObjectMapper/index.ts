import { IPropertyMapper } from "./Types/IPropertyMapper";
import { IRePoint } from "./Types/IRePoint";

type objectType = {
  [key: string]: any;
};

class Properties implements IPropertyMapper {
  protected source!: {};
  protected target!: {};

  map(source: objectType, target: objectType): IRePoint {
    if (Array.isArray(source) || Array.isArray(target)) {
      throw new Error("PropertyMapper Source or target can't be an Array");
    }
    Object.keys(source).forEach((key) => {
      if (key in target) {
        target[key] = source[key];
      }
    });
    this.source = source;
    this.target = target;
    return new RePoint(source, target);
  }
}

class RePoint<S extends objectType, T extends objectType> implements IRePoint {
  protected source!: objectType;
  protected target!: objectType;

  constructor(source: S, target: T) {
    this.source = source;
    this.target = target;
  }

  rePoint(sourceKey: string, targetKey: string): IRePoint {
    if (targetKey in this.target) {
      this.target[targetKey] = this.source[sourceKey];
    }
    return this;
  }
}

let ObjectMapper = new Properties();
export { ObjectMapper };
