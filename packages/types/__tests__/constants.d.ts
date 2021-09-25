import type * as Alt from '../src/alternative';
import type * as Basic from '../src/basic';
import type * as Convenience from '../src/convenience';

export interface Primitives {
  string: string;
  number: number;
  bigint: bigint;
  boolean: boolean;
  symbol: symbol;
  undefined: undefined;
  null: null;
}

export interface Objects {
  object: object;
  function: Function;
  array: Array<any>;
}

export declare const primitive: Primitives;
export declare const objects: Objects;
export declare const nullish: Basic.Nullish;
export declare const falsy: Basic.Falsy;
export declare const truthy: Basic.Truthy;

export interface Alternatives {
  object: Alt.Object;
  function: Alt.Function;
}

export interface Defaults {
  object: object;
  function: Function;
}

export interface Records {
  string: Record<string, unknown>;
  number: Record<number, unknown>;
  symbol: Record<symbol, unknown>;
  strnum: Record<string | number, unknown>;
  strsym: Record<string | symbol, unknown>;
  numsym: Record<number | symbol, unknown>;
  all: Record<string | number | symbol, unknown>;
}

export interface Functions {
  arg0: () => any;
  arg1: (arg: any) => any;
  arg2: (arg1: any, arg2: any) => any;
}

export declare const alt: Alternatives;
export declare const def: Defaults;
export declare const records: Records;
export declare const functions: Functions;

export interface Dicts {
  string: Convenience.Dict<string>;
  number: Convenience.Dict<number>;
  bigint: Convenience.Dict<bigint>;
  boolean: Convenience.Dict<boolean>;
  symbol: Convenience.Dict<symbol>;
  undefined: Convenience.Dict<undefined>;
  null: Convenience.Dict<null>;
  object: Convenience.Dict<object>;
  function: Convenience.Dict<Function>;
  array: Convenience.Dict<Array<any>>;
}

export declare const dicts: Dicts;
