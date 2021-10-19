/**
 * Make all properties in ObjectType optional
 *
 * @category Alternative
 */
export type Optional<ObjectType extends object> = Partial<ObjectType>;
