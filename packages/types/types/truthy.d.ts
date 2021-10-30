import type {AlternativeAny} from './alternative-any.js';
import type {Falsy} from './falsy.js';

/**
 * {@link https://developer.mozilla.org/en-US/docs/Glossary/Truthy}
 *
 * @category Basic
 */
export type Truthy<T = AlternativeAny> = Exclude<T, Falsy>;
