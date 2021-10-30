import {expectType} from 'tsd';

import type {PickByKeyType} from '../types/pick-by-key-type.js';

type MixedKeyObject = {
  [one: symbol]: 'three';
  2: string;
  three: 'three';
};

declare const pickSymbolKeysObject: Omit<MixedKeyObject, 2 | 'three'>;
declare const pickNumberKeysObject: Pick<MixedKeyObject, 2>;
declare const pickStringKeysObject: Pick<MixedKeyObject, 'three'>;

expectType<PickByKeyType<MixedKeyObject, symbol>>(pickSymbolKeysObject);
expectType<PickByKeyType<MixedKeyObject, number>>(pickNumberKeysObject);
expectType<PickByKeyType<MixedKeyObject, string>>(pickStringKeysObject);
