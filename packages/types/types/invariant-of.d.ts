/**
 * Internal type to generate Invariant type using function signature
 */
type InvariantProperty<Type> = (arg: Type) => Type;

/**
 * Internal private key to save Invariant property type
 */
declare const tag: unique symbol;

/**
 * Internal type to generate Invariant type using function signature
 */
type InvariantSignature<Type> = {
  readonly [tag]: InvariantProperty<Type>;
};

/**
 * Make type as Invariant
 *
 * @category Utilities
 */
export type InvariantOf<Type> = Type & InvariantSignature<Type>;

export {};
