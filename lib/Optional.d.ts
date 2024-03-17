interface IOptional<T> extends Object {
    get(): T;
    isPresent(): boolean;
    isEmpty(): boolean;
}
/**
 * ExpressWebJs.util.Optional
 * ________________________________________________________________
 * A container object which may or may not contain a non-null value.
 * If a value is present, isPresent() returns true otherwise false.
 * Also if a value is empty, isEmpty() returns true otherwise false.
 * @Since ExpressWebJs version 4
 */
export declare class Optional<T extends object> implements IOptional<T> {
    private data?;
    constructor(data?: T);
    /**
     * ExpressWebJs.util.Optional.get()
     * _________________________________________________________________________________
     * If a value is present, returns the value, otherwise throws NoSuchElementException
     * @Returns the non-null value described by this Optional
     * @Throws NoSuchElementException - if no value is present
     * @Since ExpressWebJs version 4
     */
    get(): T;
    /**
     * ExpressWebJs.util.Optional.isPresent()
     * ________________________________________________________
     * If a value is present, returns true, otherwise false
     * @Returns true if a value is present, otherwise false
     * @Since ExpressWebJs version 4
     */
    isPresent(): boolean;
    /**
     * ExpressWebJs.util.Optional.isEmpty()
     * ________________________________________________________
     * If the object is empty, returns true, otherwise false
     * @Returns true if an object is present, otherwise false
     * @Since ExpressWebJs version 4
     */
    isEmpty(): boolean;
}
export {};
//# sourceMappingURL=Optional.d.ts.map