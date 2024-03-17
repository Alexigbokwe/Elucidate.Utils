export interface Collection<T> {
    size(): number;
    contains(o: T): boolean;
    clear(): void;
    isEmpty(): boolean;
    toString(): string;
    reverse(): Array<T> | void;
}
//# sourceMappingURL=ICollection.d.ts.map