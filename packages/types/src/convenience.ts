/**
 * @typeParam T - Type of properties
 */
export type Dict<T = unknown> = Record<string, T>;

export type AsyncFunction = (...args: Array<any>) => Promise<unknown>;
