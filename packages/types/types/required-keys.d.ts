/**
 * Get all required properties
 *
 * @category Object
 */
export type RequiredKeys<Base> = NonNullable<
  {
    [Key in keyof Base]: Pick<Base, Key> extends Required<Pick<Base, Key>>
      ? Key
      : never;
  }[keyof Base]
>;
