import type {IndexType} from '@younho9/types';

export default function isKeyOf<T extends Record<IndexType, unknown>>(obj: T) {
  return (key: IndexType): key is keyof T => key in obj;
}
