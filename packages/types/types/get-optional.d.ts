import type {OptionalKeys} from './optional-keys.js';

export type GetOptional<Base> = Pick<Base, OptionalKeys<Base>>;
