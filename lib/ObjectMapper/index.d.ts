import { IPropertyMapper } from "./Types/IPropertyMapper";
import { IRePoint } from "./Types/IRePoint";
type objectType = {
    [key: string]: any;
};
declare class Properties implements IPropertyMapper {
    protected source: {};
    protected target: {};
    map(source: objectType, target: objectType): IRePoint;
}
declare let ObjectMapper: Properties;
export { ObjectMapper };
//# sourceMappingURL=index.d.ts.map