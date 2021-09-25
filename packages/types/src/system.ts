export class Shaped<Type extends object> {
  private _keys!: keyof Type;
}

export class Branded<Tag> {
  private _brand!: Tag;
}

export type Invariant<Type extends object = object> = Type & Shaped<Type>;

export type Nominal<Type extends unknown, Tag extends string> = Type &
  Branded<Tag>;
