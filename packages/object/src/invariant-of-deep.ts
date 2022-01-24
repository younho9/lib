import type {InvariantOfDeep} from '@younho9/types';

export function invariantOfDeep<Type>(value: Type): InvariantOfDeep<Type> {
	return value as InvariantOfDeep<Type>;
}
