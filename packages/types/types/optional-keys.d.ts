import type {RequiredKeys} from './required-keys.js';

/**
 * Get all optional properties
 *
 * @category Object
 */
export type OptionalKeys<Base> = Exclude<keyof Base, RequiredKeys<Base>>;
