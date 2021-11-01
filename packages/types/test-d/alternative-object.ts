import {
  expectAssignable,
  // ExpectError,
  expectNotAssignable,
  expectNotType,
  expectType,
} from 'tsd';

import type {AlternativeObject} from '../types/alternative-object.js';

interface SomeInterface {
  a: string;
  b: number;
  c: boolean;
}

type SomeType = {
  a: string;
  b: number;
  c: boolean;
};

class SomeClass implements SomeInterface {
  a!: string;
  b!: number;
  c!: boolean;

  constructor({a, b, c}: SomeInterface) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const valueAsLiteral = {a: '123', b: 123, c: false};
// Const valueAsEmptyObject: {} = valueAsLiteral;
// const valueAsObject: object = valueAsLiteral;
// const valueAsObjectWrapper: Object = valueAsLiteral;
const valueAsInterface: SomeInterface = valueAsLiteral;
const valueAsType: SomeType = valueAsLiteral;
const valueAsClassInstance: SomeClass = new SomeClass(valueAsLiteral);
const valueAsRecordWithStringKey: Record<string, unknown> = valueAsLiteral;
const valueAsRecordWithPropertyKey: Record<PropertyKey, unknown> =
  valueAsLiteral;

/**
 * `{}` vs `object` vs `Object` vs `Record<string, unknown>` vs `Record<PropertyKey, unknown>`
 */
expectAssignable<{}>({});
expectAssignable<object>({});
expectAssignable<Object>({});
expectAssignable<Record<string, unknown>>({});
expectAssignable<Record<PropertyKey, unknown>>({});

expectAssignable<{}>([]);
expectAssignable<object>([]);
expectAssignable<Object>([]);
expectNotAssignable<Record<string, unknown>>([]);
expectNotAssignable<Record<PropertyKey, unknown>>([]);

expectAssignable<{}>(() => undefined);
expectAssignable<object>(() => undefined);
expectAssignable<Object>(() => undefined);
expectNotAssignable<Record<string, unknown>>(() => undefined);
expectNotAssignable<Record<PropertyKey, unknown>>(() => undefined);

expectAssignable<{}>(new String(''));
expectAssignable<{}>(new Number(1));
expectAssignable<{}>(new Boolean(false));
expectAssignable<object>(new String(''));
expectAssignable<object>(new Number(1));
expectAssignable<object>(new Boolean(false));
expectAssignable<Object>(new String(''));
expectAssignable<Object>(new Number(1));
expectAssignable<Object>(new Boolean(false));
expectNotAssignable<Record<string, unknown>>(new String(''));
expectNotAssignable<Record<string, unknown>>(new Number(1));
expectNotAssignable<Record<string, unknown>>(new Boolean(false));
expectNotAssignable<Record<PropertyKey, unknown>>(new String(''));
expectNotAssignable<Record<PropertyKey, unknown>>(new Number(1));
expectNotAssignable<Record<PropertyKey, unknown>>(new Boolean(false));

expectAssignable<{}>('a');
expectNotAssignable<object>('a');
expectAssignable<Object>('a');
expectNotAssignable<Record<string, unknown>>('a');
expectNotAssignable<Record<PropertyKey, unknown>>('a');

expectAssignable<{}>(1);
expectNotAssignable<object>(1);
expectAssignable<Object>(1);
expectNotAssignable<Record<string, unknown>>(1);
expectNotAssignable<Record<PropertyKey, unknown>>(1);

expectAssignable<{}>(Symbol('symbol'));
expectNotAssignable<object>(Symbol('symbol'));
expectAssignable<Object>(Symbol('symbol'));
expectNotAssignable<Record<string, unknown>>(Symbol('symbol'));
expectNotAssignable<Record<PropertyKey, unknown>>(Symbol('symbol'));

expectNotAssignable<{}>(null);
expectNotAssignable<object>(null);
expectNotAssignable<Object>(null);
expectNotAssignable<Record<string, unknown>>(null);
expectNotAssignable<Record<PropertyKey, unknown>>(null);

expectNotAssignable<{}>(undefined);
expectNotAssignable<object>(undefined);
expectNotAssignable<Object>(undefined);
expectNotAssignable<Record<string, unknown>>(undefined);
expectNotAssignable<Record<PropertyKey, unknown>>(undefined);

expectAssignable<{}>(valueAsLiteral);
expectAssignable<object>(valueAsLiteral);
expectAssignable<Object>(valueAsLiteral);
expectAssignable<Record<string, unknown>>(valueAsLiteral); // prettier-ignore
expectAssignable<Record<PropertyKey, unknown>>(valueAsLiteral); // prettier-ignore

expectAssignable<{}>(valueAsInterface);
expectAssignable<object>(valueAsInterface);
expectAssignable<Object>(valueAsInterface);
expectNotAssignable<Record<string, unknown>>(valueAsInterface); /** {@link https://github.com/microsoft/TypeScript/issues/15300} */ // prettier-ignore
expectNotAssignable<Record<PropertyKey, unknown>>(valueAsInterface);

expectAssignable<{}>(valueAsType);
expectAssignable<object>(valueAsType);
expectAssignable<Object>(valueAsType);
expectAssignable<Record<string, unknown>>(valueAsType);
expectAssignable<Record<PropertyKey, unknown>>(valueAsType);

expectAssignable<{}>(valueAsClassInstance);
expectAssignable<object>(valueAsClassInstance);
expectAssignable<Object>(valueAsClassInstance);
expectNotAssignable<Record<string, unknown>>(valueAsClassInstance);
expectNotAssignable<Record<PropertyKey, unknown>>(valueAsClassInstance);

expectAssignable<{}>(valueAsRecordWithStringKey);
expectAssignable<object>(valueAsRecordWithStringKey);
expectAssignable<Object>(valueAsRecordWithStringKey);
expectAssignable<Record<string, unknown>>(valueAsRecordWithStringKey);
expectAssignable<Record<PropertyKey, unknown>>(valueAsRecordWithStringKey);

expectAssignable<{}>(valueAsRecordWithPropertyKey);
expectAssignable<object>(valueAsRecordWithPropertyKey);
expectAssignable<Object>(valueAsRecordWithPropertyKey);
expectAssignable<Record<string, unknown>>(valueAsRecordWithPropertyKey);
expectAssignable<Record<PropertyKey, unknown>>(valueAsRecordWithPropertyKey);

/**
 * `{}` | `object` | `Object` is hard to use due to not being able to assert that keys exist
 *
 * {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md#default-options}
 */
// expectError(valueAsEmptyObject.a);
// expectError(valueAsObject.a);
// expectError(valueAsObjectWrapper.a);
expectType<unknown>(valueAsRecordWithStringKey.a);
expectType<unknown>(valueAsRecordWithPropertyKey.a);

/**
 * Equality of Default and Alternative
 */
expectType<object>({} as object);
expectNotType<object>({} as AlternativeObject);

expectType<AlternativeObject>({} as AlternativeObject);
expectNotType<AlternativeObject>({} as object);

/**
 * Assignability of Default and Alternative
 */
expectAssignable<object>({} as object);
expectAssignable<object>({} as AlternativeObject);

expectNotAssignable<AlternativeObject>({} as object);
expectAssignable<AlternativeObject>({} as AlternativeObject);

expectNotAssignable<Function>({} as object);
expectNotAssignable<Function>({} as AlternativeObject);
