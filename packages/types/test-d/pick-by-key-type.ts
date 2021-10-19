import {expectType} from 'tsd';

import type {PickByKeyType} from '../types/pick-by-key-type';

type MixedKeyObj = {
  1: string;
  two: 'two';
  [three: symbol]: 'three';
};

declare const pickSymbolKeysObject: Omit<MixedKeyObj, 1 | 'two'>;
declare const pickNumberKeysObject: Pick<MixedKeyObj, 1>;
declare const pickStringKeysObject: Pick<MixedKeyObj, 'two'>;

expectType<PickByKeyType<MixedKeyObj, symbol>>(pickSymbolKeysObject);
expectType<PickByKeyType<MixedKeyObj, number>>(pickNumberKeysObject);
expectType<PickByKeyType<MixedKeyObj, string>>(pickStringKeysObject);
