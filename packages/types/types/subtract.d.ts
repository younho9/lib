import type {AlternativeAny} from './alternative-any';

/**
 * {@link https://github.com/microsoft/TypeScript/issues/4183}
 *
 * @category Utilities
 */
export type Subtract<Type> = Exclude<AlternativeAny, Type>;
