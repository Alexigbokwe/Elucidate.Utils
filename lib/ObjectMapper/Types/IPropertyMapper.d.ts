import { IRePoint } from "./IRePoint";
export interface IPropertyMapper {
    /**
     * ExpressWebJs.util.PropertyMapper.map
     * -------------------------------------
     * PropertyMapper.map automatically copies
     * an object to another.
     * @since ExpressWebJs version 4
     */
    map<S extends object, T extends object>(source: S, target: T): IRePoint;
}
//# sourceMappingURL=IPropertyMapper.d.ts.map