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
export class Optional<T extends object> implements IOptional<T> {
  private data?: T;

  constructor(data?: T) {
    this.data = data;
  }

  /**
   * ExpressWebJs.util.Optional.get()
   * _________________________________________________________________________________
   * If a value is present, returns the value, otherwise throws NoSuchElementException
   * @Returns the non-null value described by this Optional
   * @Throws NoSuchElementException - if no value is present
   * @Since ExpressWebJs version 4
   */
  get(): T {
    if (!this.isPresent()) {
      throw new Error("NoSuchElementException: No element found");
    }

    return this.data as T;
  }

  /**
   * ExpressWebJs.util.Optional.isPresent()
   * ________________________________________________________
   * If a value is present, returns true, otherwise false
   * @Returns true if a value is present, otherwise false
   * @Since ExpressWebJs version 4
   */
  isPresent(): boolean {
    return this.data !== undefined && this.data !== null;
  }

  /**
   * ExpressWebJs.util.Optional.isEmpty()
   * ________________________________________________________
   * If the object is empty, returns true, otherwise false
   * @Returns true if an object is present, otherwise false
   * @Since ExpressWebJs version 4
   */
  isEmpty(): boolean {
    return !this.isPresent() || Object.keys(this.data).length === 0;
  }
}
