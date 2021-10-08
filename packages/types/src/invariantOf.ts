import type {Dict} from './convenience';

/**
 * Helper for `InvariantOf` and is not useful on its own
 */
export class Shaped<O extends Dict> {
  protected readonly _keys!: keyof O;
}

/**
 * Invariant type of object type
 *
 * @see https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)#:~:text=invariant%20or%20nonvariant%20if%20not%20variant.
 */
export type InvariantOf<O extends Dict = Dict> = O & Shaped<O>;

/**
 * Constructs a invariant object type
 */
export function Invariant<O extends Dict>(obj: O): InvariantOf<O> {
  return obj as InvariantOf<O>;
}
