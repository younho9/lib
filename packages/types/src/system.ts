import type {Dict} from './convenience';
import type {OptionalToUndefined} from './object';

/**
 * Helper for `Invariant` and is not useful on its own
 */
export class Shaped<O extends Dict> {
  protected readonly _keys!: keyof O;
}

/**
 * Helper for `Nominal` and is not useful on its own
 */
export class Branded<Tag> {
  protected readonly _brand!: Tag;
}

/**
 * Constructs a invariant object type
 *
 * @see https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)#:~:text=invariant%20or%20nonvariant%20if%20not%20variant.
 */
export type Invariant<O extends Dict = Dict> = OptionalToUndefined<O> &
  Shaped<O>;

/**
 * Constructs a nominal type
 */
export type Nominal<O extends unknown, Tag extends string> = O & Branded<Tag>;
