import {get as _get} from 'lodash-es';
import type {Get} from 'type-fest';

export function get<BaseType, Path extends string>(
	object: BaseType,
	path: Path,
	defaultValue?: any,
): Get<BaseType, Path> {
	return _get(object, path, defaultValue) as Get<BaseType, Path>;
}
