// A linked list node
export interface ILinkedListNode<T> {
  element: T;
  next: ILinkedListNode<T> | null;
}
