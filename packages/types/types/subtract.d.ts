import type {AlternativeAny} from './alternative-any.js';

/**
 * {@link https://github.com/microsoft/TypeScript/issues/4183}
 *
 * @category Utilities
 */
export type Subtract<Type> = Exclude<AlternativeAny, Type>;
