/**
 * ExpressWebJs.util.Group
 * ________________________________________________________________
 * A container object which enables you group an array of elements by value.
 * @Since ExpressWebJs version 4
 */
type objectType = {
    [key: string | number]: any;
};
export declare class Group {
    /**
     * Group an element in the array by a value
     * @param dataList
     * @param fn
     * @example: Group.anElementBy(users,(user)=>user.first_name)
     */
    static anElementBy<T>(dataList: objectType[], fn: (dt: objectType) => string | number): Record<string, T>;
    /**
     * Group all elements in the array by a value
     * @param dataList
     * @param fn
     * @returns
     */
    static allElementsBy<T>(dataList: objectType[], fn: (dt: objectType) => string | number): Record<string, T[]>;
}
export {};
//# sourceMappingURL=Group.d.ts.map