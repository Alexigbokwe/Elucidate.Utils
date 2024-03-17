import { IList } from "./Types/IList";
/**
 * An ordered collection (also known as a <i>sequence</i>).  The user of this
 * interface has precise control over where in the list each element is
 * inserted.  The user can access elements by their integer index (position in
 * the list), and search for elements in the list.<p>
 *
 * Unlike sets, lists typically allow duplicate elements.  More formally,
 * lists typically allow pairs of elements {@code e1} and {@code e2}
 * such that {@code e1.equals(e2)}, and they typically allow multiple
 * null elements if they allow null elements at all.  It is not inconceivable
 * that someone might wish to implement a list that prohibits duplicates, by
 * throwing runtime exceptions when the user attempts to insert them, but we
 * expect this usage to be rare.<p>
 */
export declare class List<T> implements IList<T> {
    private items;
    /**
     * Returns the number of elements in this list.
     *
     * @return the number of elements in this list
     */
    size(): number;
    /**
     * Returns {@code true} if this list contains the specified element.
     * More formally, returns {@code true} if and only if this list contains
     * at least one element {@code e} such that
     * {@code Objects.equals(o, e)}.
     *
     * @param o element whose presence in this list is to be tested
     * @return {@code true} if this list contains the specified element
     */
    contains(o: T): boolean;
    /**
     * Appends the specified element to the end of this list (optional
     * operation).
     */
    add(item: T): void;
    /**
     * Replaces the element at the specified position in this list with the
     * specified element (optional operation).
     *
     * @param index index of the element to replace
     * @param element element to be stored at the specified position
     * @return the element previously at the specified position
     */
    set(index: number, element: T): T;
    /**
     * Appends all of the elements in the specified collection to the end of
     * this list, in the order that they are returned by the specified
     * collection's iterator (optional operation).  The behavior of this
     * operation is undefined if the specified collection is modified while
     * the operation is in progress.  (Note that this will occur if the
     * specified collection is this list, and it's nonempty.)
     */
    addAll(c: Array<T>): boolean;
    /**
     * Inserts all of the elements in the specified collection into this
     * list at the specified position (optional operation).  Shifts the
     * element currently at that position (if any) and any subsequent
     * elements to the right (increases their indices).  The new elements
     * will appear in this list in the order that they are returned by the
     * specified collection's iterator.  The behavior of this operation is
     * undefined if the specified collection is modified while the
     * operation is in progress.  (Note that this will occur if the specified
     * collection is this list, and it's nonempty.)
     */
    addAll(index: number, c: Array<T>): boolean;
    /**
     * Removes the specified element from this list,
     * if it is present (optional operation).  If this list does not contain
     * the element, it is unchanged.
     * (if such an element exists).  Returns {@code true} if this list
     * contained the specified element (or equivalently, if this list changed
     * as a result of the call).
     *
     * @param value element to be removed from this list, if present
     * @return {@code true} if this list contained the specified element
     */
    remove(value: T): boolean;
    /**
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
     *@param searchElement — The value to locate in the array.
     *@param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     */
    indexOf(value: T): number;
    /**
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
     *@param searchElement — The value to locate in the array.
     *@param fromIndex — The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
     */
    lastIndexOf(value: T): number;
    /**
     * Removes from this list all of its elements that are contained in the
     * specified collection (optional operation).
     *
     * @param c collection containing elements to be removed from this list
     * @return {@code true} if this list changed as a result of the call
     */
    removeAll(c: Array<T>): boolean;
    /**
     * Compares the specified object with this list for equality.  Returns
     * {@code true} if and only if the specified object is also a list, both
     * lists have the same size, and all corresponding pairs of elements in
     * the two lists are <i>equal</i>.  (Two elements {@code e1} and
     * {@code e2} are <i>equal</i> if {@code Objects.equals(e1, e2)}.)
     * In other words, two lists are defined to be
     * equal if they contain the same elements in the same order.  This
     * definition ensures that the equals method works properly across
     * different implementations of the {@code List} interface.
     *
     * @param c the object to be compared for equality with this list
     * @return {@code true} if the specified object is equal to this list
     */
    equals(c: Array<T>): boolean;
    /**
     * Removes all of the elements from this list (optional operation).
     * The list will be empty after this call returns.
     */
    clear(): void;
    /**
     * Returns {@code true} if this list contains all of the elements of the
     * specified collection.
     *
     * @param  c collection to be checked for containment in this list
     * @return {@code true} if this list contains all of the elements of the
     *         specified collection
     */
    containsAll(c: Array<T>): boolean;
    /**
     * Returns the element at the specified position in this list.
     *
     * @param index index of the element to return
     * @return the element at the specified position in this list
     */
    get(index: number): T | undefined;
    toString(): string;
    reverse(): Array<T>;
    /**
     * Returns {@code true} if this list contains no elements.
     *
     * @return {@code true} if this list contains no elements
     */
    isEmpty(): boolean;
    /**
     * Returns an array containing all of the elements in this list in proper
     * sequence (from first to last element).
     *
     */
    toArray(): Array<T>;
}
//# sourceMappingURL=List.d.ts.map