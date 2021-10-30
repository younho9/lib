export default function isKeyOf<
  T extends object, // eslint-disable-line @typescript-eslint/ban-types
>(object: T) {
  return (key: PropertyKey): key is keyof T => key in object;
}
