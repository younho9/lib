/**
 * Helper for `Invariant` and is not useful on its own
 */
export class Shaped<Type extends object> {
  private _keys!: keyof Type;
}

/**
 * Helper for `Nominal` and is not useful on its own
 */
export class Branded<Tag> {
  private _brand!: Tag;
}

/**
 * Constructs a invariant object type
 *
 * @see https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)#:~:text=invariant%20or%20nonvariant%20if%20not%20variant.
 */
export type Invariant<Type extends object = object> = Type & Shaped<Type>;

/**
 * Constructs a nominal type
 */
export type Nominal<Type extends unknown, Tag extends string> = Type &
  Branded<Tag>;
