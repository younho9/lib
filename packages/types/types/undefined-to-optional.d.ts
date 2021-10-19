import type {OmitByValueType} from './omit-by-value-type';
import type {Optional} from './optional';
import type {PickByValueType} from './pick-by-value-type';

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
