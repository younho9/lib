// eslint-disable-next-line @typescript-eslint/ban-types
export default function isKeyOf<T extends object>(obj: T) {
  return (key: PropertyKey): key is keyof T => key in obj;
}
