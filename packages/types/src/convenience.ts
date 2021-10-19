import type {Primitive} from './basic';

export type Dict<Type = unknown> = Record<string, Type>;

export type AsyncFunction = (...args: Array<any>) => Promise<unknown>;

export type ToString<Type> = Type extends Exclude<Primitive, symbol | bigint>
  ? `${Type}`
  : never;
