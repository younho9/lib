import {isUndefined, isNull} from '@sniptt/guards';
import type {Nullish} from '@younho9/types';

export default function isNullish(value: unknown): value is Nullish {
	return isUndefined(value) || isNull(value);
}
