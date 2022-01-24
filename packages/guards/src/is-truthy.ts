import type {Falsy, Truthy} from '@younho9/types';

import isFalsy from './is-falsy.js';

export default function isTruthy<T>(
	condition: T | Falsy,
): condition is Truthy<T> {
	return !isFalsy(condition);
}
