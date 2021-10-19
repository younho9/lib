import type {Subtract} from './subtract';

/**
 * @category Utilities
 */
export type ToString<Type> = Type extends Subtract<symbol | bigint | object>
  ? `${Type}`
  : never;
