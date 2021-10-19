import type {AlternativeAny} from './alternative-any';
import type {Falsy} from './falsy';

/**
 * {@link https://developer.mozilla.org/en-US/docs/Glossary/Truthy}
 *
 * @category Basic
 */
export type Truthy<T = AlternativeAny> = Exclude<T, Falsy>;
