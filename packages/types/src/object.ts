/**
 * Make all properties in O optional
 */
export type Optional<O extends object> = Partial<O>;

/**
 * Convert all the optional properties in O with undefined type
 */
export type OptionalToUndefined<O extends object> = {
  [K in keyof Required<O>]: Pick<O, K> extends Required<Pick<O, K>>
    ? O[K]
    : O[K] | undefined;
};

/**
 * Convert all properties can be assigned undefined in T to optional
 */
export type UndefinedToOptional<O extends object> = OmitByType<O, undefined> &
  Optional<PickByType<O, undefined>>;

/**
 * Extract keys from O that are assignable to T
 */
export type ExtractKeysByType<O extends object, T> = {
  [K in keyof O]-?: T extends O[K] ? K : never;
}[keyof O];

/**
 * Exclude keys from O that are assignable to T
 */
export type ExcludeKeysByType<O extends object, T> = Exclude<
  keyof O,
  ExtractKeysByType<O, T>
>;

/**
 * From O, pick a set of properties that are assignable to T
 */
export type PickByType<O extends object, T> = Pick<O, ExtractKeysByType<O, T>>;

/**
 * Construct a type with the properties of O except for those are assignable to T
 */
export type OmitByType<O extends object, T> = Omit<O, keyof PickByType<O, T>>;

/**
 * Exclude keys from O that are with the same name as T.
 */
export type ExcludeKeysByName<O extends object, T> = Exclude<keyof O, T>;

/**
 * Extract keys from O that are with the same name as T.
 */
export type ExtractKeysByName<O extends object, T> = Extract<keyof O, T>;

/**
 * Object's own enumerable property names
 */
export type ObjectKeys<O extends object> = ExcludeKeysByName<O, symbol>[];
