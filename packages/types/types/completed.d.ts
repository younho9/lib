import type {RequiredKeys} from './required-keys.js';

/**
 * Convert all the optional properties in Base with undefined type
 *
 * {@link https://medium.com/terria/typescript-transforming-optional-properties-to-required-properties-that-may-be-undefined-7482cb4e1585}
 *
 * @category Object
 */
export type Completed<Base> = {
  [Key in keyof Required<Base>]: Key extends RequiredKeys<Base>
    ? Base[Key]
    : Base[Key] | undefined;
};
