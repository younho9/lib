import type {Subtract} from './subtract.js';

/**
 * @category Utilities
 */
export type ToString<Type> = Type extends Subtract<symbol | bigint | object>
	? `${Type}`
	: never;
