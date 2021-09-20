import type {Dict} from '@younho9/types';

export default function isKeyOf<T extends Dict>(obj: T) {
  return (key: PropertyKey): key is keyof T => key in obj;
}
