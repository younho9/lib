import type {RequiredKeys} from './required-keys.js';

export type GetRequired<Base> = Pick<Base, RequiredKeys<Base>>;
