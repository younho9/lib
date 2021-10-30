import type {OmitByValueType} from './omit-by-value-type.js';
import type {Optional} from './optional.js';
import type {PickByValueType} from './pick-by-value-type.js';

/**
 * Convert all properties can be assigned undefined in T to optional
 *
 * @category Object
 */
export type UndefinedToOptional<ObjectType extends object> = OmitByValueType<
  ObjectType,
  undefined
> &
  Optional<PickByValueType<ObjectType, undefined>>;
