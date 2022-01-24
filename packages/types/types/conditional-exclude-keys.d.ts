import type {ConditionalKeys} from 'type-fest';

/**
Extract the keys from a type where the value type of the key extends the given `Condition`.

Internally this is used for the `ConditionalPick` and `ConditionalExcept` types.

@example
```
import {ConditionalKeys} from 'type-fest';

interface Example {
	a: string;
	b: string | number;
	c?: string;
	d: {};
}

type StringKeysOnly = ConditionalKeys<Example, string>;
//=> 'a'
```

To support partial types, make sure your `Condition` is a union of undefined (for example, `string | undefined`) as demonstrated below.

@example
```
type StringKeysAndUndefined = ConditionalKeys<Example, string | undefined>;
//=> 'a' | 'c'
```

@category Object
*/
export type ConditionalExcludeKeys<Base, Condition> = Exclude<
	keyof Base,
	ConditionalKeys<Base, Condition>
>;
