import { Collection } from "./ICollection";
export interface IList<T> extends Collection<T> {
    add(item: T): void;
    set(index: number, element: T): T;
    addAll(c: Array<T>): boolean;
    addAll(index: number, c: Array<T>): boolean;
    remove(value: T): boolean;
    indexOf(value: T): number;
    lastIndexOf(value: T): number;
    removeAll(c: Array<T>): boolean;
    equals(c: Array<T>): boolean;
    containsAll(c: Array<T>): boolean;
    get(index: number): T | undefined;
    toArray(): Array<T>;
}
//# sourceMappingURL=IList.d.ts.map